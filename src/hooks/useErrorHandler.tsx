
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ErrorState {
  error: Error | null;
  isError: boolean;
}

export const useErrorHandler = () => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isError: false
  });
  const { toast } = useToast();

  const handleError = useCallback((error: Error | string, showToast = true) => {
    const errorObj = error instanceof Error ? error : new Error(error);
    
    console.error('Error handled:', errorObj);
    
    setErrorState({
      error: errorObj,
      isError: true
    });

    if (showToast) {
      toast({
        variant: "destructive",
        title: "Error",
        description: errorObj.message || "An unexpected error occurred"
      });
    }
  }, [toast]);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      isError: false
    });
  }, []);

  const executeWithErrorHandling = useCallback(async <T,>(
    asyncFn: () => Promise<T>,
    errorMessage?: string
  ): Promise<T | null> => {
    try {
      clearError();
      return await asyncFn();
    } catch (error) {
      const message = errorMessage || (error instanceof Error ? error.message : 'Operation failed');
      handleError(message);
      return null;
    }
  }, [handleError, clearError]);

  return {
    error: errorState.error,
    isError: errorState.isError,
    handleError,
    clearError,
    executeWithErrorHandling
  };
};
