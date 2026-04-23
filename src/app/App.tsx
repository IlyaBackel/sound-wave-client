/* eslint-disable react-refresh/only-export-components */
import { useEffect, type FC } from 'react';
import './styles/index.css';

import { observer } from 'mobx-react-lite';

import { useStore } from './providers/StoreProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/routes';

const App: FC = () => {
  const { store } = useStore();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  return (
    <>
      <RouterProvider router={router} />
      {store.isAuth ? store.user.email : 'not auth'}  
    </>
  );
};

export default observer(App);
