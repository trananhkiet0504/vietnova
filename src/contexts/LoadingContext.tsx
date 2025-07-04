import React, { createContext, useContext, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setMessage?: (msg: string) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('Please wait...');

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, setMessage }}>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out">
          <div className="animate-fade-in flex flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-900">
            {/* Spinner */}
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-b-transparent border-l-blue-500 border-r-indigo-500" />

            {/* Glowing text */}
            <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200 drop-shadow-sm">
              {message}
            </p>
          </div>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};
