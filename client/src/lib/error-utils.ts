// 에러 타입 정의
export enum ErrorType {
  NETWORK = 'NETWORK',
  SERVER = 'SERVER',
  AUTH = 'AUTH',
  VALIDATION = 'VALIDATION',
  UNKNOWN = 'UNKNOWN'
}

// 에러 클래스 정의
export class AppError extends Error {
  type: ErrorType;
  originalError?: any;
  statusCode?: number;
  retryable: boolean;

  constructor(message: string, type: ErrorType = ErrorType.UNKNOWN, statusCode?: number, originalError?: any, retryable = false) {
    super(message);
    this.type = type;
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.retryable = retryable;
    this.name = 'AppError';
  }
}

// 사용자 친화적인 에러 메시지
export function getUserFriendlyErrorMessage(error: any): string {
  if (error instanceof AppError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      return '네트워크 연결에 문제가 있습니다. 인터넷 연결을 확인하고 다시 시도해주세요.';
    }
    
    return error.message || '예상치 못한 오류가 발생했습니다. 다시 시도해주세요.';
  }
  
  return '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.';
}

// 에러 코드에 기반한 친화적인 메시지
export function getErrorMessageByStatusCode(statusCode: number): string {
  switch (statusCode) {
    case 400:
      return '요청에 문제가 있습니다. 입력 값을 확인해주세요.';
    case 401:
      return '인증이 필요합니다. 다시 로그인해주세요.';
    case 403:
      return '이 작업을 수행할 권한이 없습니다.';
    case 404:
      return '요청하신 정보를 찾을 수 없습니다.';
    case 408:
    case 504:
      return '서버 응답 시간이 초과되었습니다. 나중에 다시 시도해주세요.';
    case 500:
    case 502:
    case 503:
      return '서버에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.';
    default:
      return '오류가 발생했습니다. 다시 시도해주세요.';
  }
}
