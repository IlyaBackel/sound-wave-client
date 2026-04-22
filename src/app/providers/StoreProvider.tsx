/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode, useContext } from 'react';
import Store from '../../entities/user/model/store';

interface StoreProviderProps {
  children: ReactNode;
}

interface StoreContextValue {
  store: Store;
}

const store = new Store();

export const StoreContext = createContext<StoreContextValue>({ store });

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};
