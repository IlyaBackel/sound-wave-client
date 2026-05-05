// src/app/App.tsx
import { useEffect, type FC } from 'react';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routing/routes';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { checkAuth } from '../entities/user';


const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, user } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);


  console.log(user)


  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;