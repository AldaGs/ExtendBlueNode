import { createContext, useContext } from 'react';

const GlobalsContext = createContext({
  globalVariables: [],
  setGlobalVariables: () => {},
});

export const GlobalsProvider = GlobalsContext.Provider;
export const useGlobals = () => useContext(GlobalsContext);
