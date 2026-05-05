import { createBrowserRouter } from 'react-router';

import { LoginForm, RegisterForm } from '../../features';
import AuthLayout from '../layouts/auth-layout';
import MainLayout from '../layouts/main-layout';
import TrendingPage from '../../pages/trending-page';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'register',
        element: <RegisterForm />,
      },
    ],
  },
  {
     path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/trending',
        element: <TrendingPage />
      }
    ]
  }
]);
