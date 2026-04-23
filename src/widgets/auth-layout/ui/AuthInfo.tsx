import { colors } from "../../../shared/config/theme";
import { AuthInfoLogin } from "./AuthInfoLogin";
import { AuthInfoRegister } from "./AuthInfoRegister";

export const AuthInfo = ({type}: {type: 'login' | 'register'}) => {
  return (
    <div className={`bg-[${colors.primary}] flex items-center justify-center h-full w-[50%]`}>
      {type === 'login' ? <AuthInfoLogin /> : <AuthInfoRegister />}
    </div>
  );
};
