"use client";
import { createContext, useContext, useState, ReactNode, JSX } from 'react';

const ShowContext = createContext<{
  show: JSX.Element  | null;
  setShow: React.Dispatch<React.SetStateAction<JSX.Element  | null>>;
} | undefined>(undefined);


export const ShowProvider = (
  { children }: { children: ReactNode }
) => {
  const [show, setShow] = useState<JSX.Element  | null>(null);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {show}
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
