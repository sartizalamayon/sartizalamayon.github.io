"use client";
import { createContext, useContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cmd, setCmd] = useState(false);

  return (
    <MyContext.Provider value={{ cmd, setCmd }}>
      {children}
    </MyContext.Provider>
  );
};

