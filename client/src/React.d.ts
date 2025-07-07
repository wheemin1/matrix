// React 전역 선언
declare global {
  interface Window {
    React: typeof import('react');
  }
}

export {};
