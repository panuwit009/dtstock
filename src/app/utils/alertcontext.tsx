"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { popupDetail } from '../type';

const AlertContext = createContext<{
  show: popupDetail | null;
  setShow: React.Dispatch<React.SetStateAction<popupDetail | null>>;
} | undefined>(undefined);


export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState<popupDetail | null>(null);

  return (
    <AlertContext.Provider value={{ show, setShow }}>
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
