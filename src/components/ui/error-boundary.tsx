"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const errorMessage = this.state.error?.message || "Unknown error";
      const isDev = process.env.NODE_ENV === "development";

      return (
        <div
          className="flex min-h-screen flex-col items-center justify-center px-4 py-16"
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-md text-center">
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-foreground-dark">
              Something went wrong
            </h2>
            <p className="mb-6 text-neutral-700 dark:text-foreground-dark-secondary">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            {isDev && this.state.error && (
              <details className="mb-6 max-w-full overflow-auto rounded-lg border border-destructive/20 bg-destructive/5 p-4 text-left text-sm">
                <summary className="cursor-pointer font-semibold text-destructive">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-words text-xs">
                  {errorMessage}
                  {this.state.error.stack && `\n\n${this.state.error.stack}`}
                </pre>
              </details>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="gradient-primary rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
