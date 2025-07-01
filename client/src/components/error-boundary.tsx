import { Component, type ErrorInfo, type ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ErrorBoundaryProps {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('Uncaught error:', error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Default fallback UI
      return (
        <div className="p-6 flex flex-col items-center justify-center min-h-[200px]">
          <div className="glass-card p-6 max-w-md w-full">
            <Alert variant="destructive" className="mb-4 bg-red-500/10 border-red-500/30">
              <AlertTitle className="text-lg font-bold text-white">오류가 발생했습니다</AlertTitle>
              <AlertDescription className="mt-2 text-white/80">
                {this.state.error?.message || '예상치 못한 오류가 발생했습니다. 다시 시도해주세요.'}
              </AlertDescription>
            </Alert>
            <Button 
              onClick={this.resetError}
              variant="outline"
              className="mt-4 flex items-center gap-2 w-full mystical-button from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold"
            >
              <RefreshCw className="h-4 w-4" />
              다시 시도하기
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;