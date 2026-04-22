/* eslint-disable react-refresh/only-export-components */
import { useEffect, type FC } from 'react';
import './styles/index.css';

import { observer } from 'mobx-react-lite';
import { LoginForm } from '../features';
import { useStore } from './providers/StoreProvider';

const App: FC = () => {
  const { store } = useStore();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, [store]);

  return (
    <>
      <h1>
        {store.isAuth
          ? `User is authorized ${store.user.email}`
          : `User is not authorized`}
      </h1>
      <LoginForm />
    </>
  );
};

export default observer(App);
