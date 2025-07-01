import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  fullScreen?: boolean;
  message?: string;
}

export default function Loading({ 
  size = 'md', 
  fullScreen = false,
  message = 'Loading...'
}: LoadingProps) {
  const sizeClass = {
    'sm': 'w-4 h-4',
    'md': 'w-8 h-8',
    'lg': 'w-12 h-12'
  }[size];

  const containerClass = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50' 
    : 'flex items-center justify-center py-8';

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-2">
        <Loader2 className={`${sizeClass} animate-spin text-primary`} />
        {message && (
          <p className="text-sm text-muted-foreground animate-pulse">{message}</p>
        )}
      </div>
    </div>
  );
}
