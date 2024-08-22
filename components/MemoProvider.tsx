import React, { createContext, useState, useContext } from 'react';
import { example } from '../exampleData/exampleArray';


const AppContext = createContext(null);

export type exampleData = {
    title: string,
    content: string,
    tag: string,
    color: string,
}


export const AppProvider = ({ children }) => {
  const [exampleData, setExampleData] = useState(example);

  const addData = (newData) => {
    setExampleData([...exampleData, newData]);
  };

  const resetData = () => {
    setExampleData([]);
  };

  return (
    <AppContext.Provider value={{ exampleData, addData, resetData }}>
      {children}
    </AppContext.Provider>
  );
};

// Context를 쉽게 사용할 수 있도록 하는 커스텀 훅
export const useAppContext = () => useContext(AppContext);