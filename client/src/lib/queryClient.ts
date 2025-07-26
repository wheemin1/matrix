import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { AppError, ErrorType, getErrorMessageByStatusCode } from "./error-utils";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    let errorMessage;
    
    try {
      // JSON 에러 응답이 있는지 확인
      const errorData = JSON.parse(text);
      errorMessage = errorData.message || errorData.error || getErrorMessageByStatusCode(res.status);
    } catch (e) {
      // 일반 텍스트 응답 처리
      errorMessage = text || getErrorMessageByStatusCode(res.status);
    }
    
    throw new AppError(
      errorMessage,
      res.status >= 400 && res.status < 500 ? ErrorType.VALIDATION : ErrorType.SERVER,
      res.status
    );
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
  retryCount = 0,
  maxRetries = 3
): Promise<Response> {
  try {
    console.log(`Sending ${method} request to ${url}`, data);
    
    const options: RequestInit = {
      method,
      headers: {
        ...data ? { "Content-Type": "application/json" } : {},
        "Accept": "application/json"
      },
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
      mode: "cors"
    };
    
    const res = await fetch(url, options);

    await throwIfResNotOk(res);
    return res;
  } catch (error) {
    // 네트워크 에러 처리
    if (error instanceof TypeError && error.message.includes('fetch')) {
      if (retryCount < maxRetries) {
        // 지수 백오프로 재시도 간격 설정 (1초, 2초, 4초)
        const backoffDelay = Math.pow(2, retryCount) * 1000;
        await new Promise(resolve => setTimeout(resolve, backoffDelay));
        
        return apiRequest(method, url, data, retryCount + 1, maxRetries);
      }
      
      throw new AppError(
        '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.',
        ErrorType.NETWORK,
        undefined,
        error,
        true // 재시도 가능 표시
      );
    }

    // 기타 에러는 그대로 전파
    throw error;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    try {
      const res = await fetch(queryKey[0] as string, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      return await res.json();
    } catch (error) {
      // 네트워크 에러 처리
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new AppError(
          '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.',
          ErrorType.NETWORK,
          undefined,
          error
        );
      }
      
      // 이미 AppError로 처리된 에러는 그대로 전달
      if (error instanceof AppError) {
        throw error;
      }
      
      // 그 외 에러는 UNKNOWN으로 처리
      throw new AppError(
        '예상치 못한 오류가 발생했습니다. 다시 시도해주세요.',
        ErrorType.UNKNOWN,
        undefined,
        error
      );
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
