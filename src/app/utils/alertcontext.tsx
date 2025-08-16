"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { alertDetail } from '../type';

const AlertContext = createContext<{
  show: alertDetail | null;
  al: React.Dispatch<React.SetStateAction<alertDetail | null>>;
} | undefined>(undefined);


export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [show, al] = useState<alertDetail | null>(null);

  return (
    <AlertContext.Provider value={{ show, al }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};
