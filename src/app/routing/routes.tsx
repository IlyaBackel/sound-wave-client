import { createBrowserRouter } from 'react-router';

import { LoginForm, RegisterForm } from '../../features';
import AuthLayout from '../../widgets/auth-layout';

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
]);
