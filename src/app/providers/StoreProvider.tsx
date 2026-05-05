import { Provider } from 'react-redux';
import { setupStore } from '../store/store';
import type { ReactNode } from 'react';


const store = setupStore();

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};