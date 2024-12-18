export {};

declare global {
  interface Window {
    Alpine: {
      store: (name: string, value: any) => void;
      [key: string]: any;
    }
  }
} 