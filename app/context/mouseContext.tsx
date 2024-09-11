'use client';
import React, { createContext, useState, ReactNode } from "react";

// Define the types for the context values
interface MouseContextProps {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
}

// Create the context with default values
export const MouseContext = createContext<MouseContextProps>({
  cursorType: '',
  cursorChangeHandler: () => {},
});

// Define the props type for the provider
interface MouseContextProviderProps {
  children: ReactNode;
}

const MouseContextProvider: React.FC<MouseContextProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState<string>("");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType,
        cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
