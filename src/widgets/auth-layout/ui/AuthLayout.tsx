import { Outlet, useLocation } from 'react-router-dom';
import { AuthInfo } from './AuthInfo';

const AuthLayout = () => {
  const location = useLocation();
  const isRegister = location.pathname === '/register';

  return (
    <div className="min-h-screen min-w-screen">
      {isRegister ? (
        <div className="flex flex-row items-center justify-center">
          <Outlet />
          <AuthInfo />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center">
          <AuthInfo />
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
