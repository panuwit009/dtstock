"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { ShowType } from '../type';
import AlertPTB from './alert';
import Tooltip from './tooltip';

const ShowContext = createContext<{
  show: ShowType | null;
  setShow: React.Dispatch<React.SetStateAction<ShowType | null>>;
} | undefined>(undefined);


export const ShowProvider = (
  { children }: { children: ReactNode }
) => {
  const [show, setShow] = useState<ShowType | null>(null);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {show && (() => {
        switch (show.type) {
          case "alert":
            return <AlertPTB />;
          case "tooltip":
            return <Tooltip />;
          default:
            return null;
        }
      })()}
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error('useShow must be used within an ShowProvider');
  }
  return context;
};
