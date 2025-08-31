"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { alertDetail } from '../type';
import AlertPTB from './alert';

const AlertContext = createContext<{
  show: alertDetail | null;
  al: React.Dispatch<React.SetStateAction<alertDetail | null>>;
} | undefined>(undefined);


export const AlertProvider = (
  { children }: { children: ReactNode }
) => {
  const [show, al] = useState<alertDetail | null>(null);

  return (
    <AlertContext.Provider value={{ show, al }}>
      {children}
      {show && (() => {
        switch (show.type) {
          case "success":
            return <AlertPTB />;
          case "error":
            return <div className="fixed top-10 left-20">asdasdasd</div>;
          default:
            return null;
        }
      })()}

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
