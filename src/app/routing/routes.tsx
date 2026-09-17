import { createBrowserRouter, Navigate } from 'react-router-dom';

import { LoginForm, RegisterForm } from '../../features';
import AuthLayout from '../layouts/auth-layout';
import MainLayout from '../layouts/main-layout';
import TrendingPage from '../../pages/trending-page';
import HomePage from '../../pages/home-page';

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
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <HomePage />
      },
      {
        path: 'trending',
        element: <TrendingPage />
      },
    ]
  }
]);
