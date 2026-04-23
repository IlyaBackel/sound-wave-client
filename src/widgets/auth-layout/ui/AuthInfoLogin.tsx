import { NavLink } from "react-router-dom";
import { Button } from "../../../shared/ui/Button";
import { motion } from "framer-motion";

export const AuthInfoLogin = () => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-10 items-center justify-center h-full w-[70%]"
        >
                <h1 className="text-4xl font-bold">Welcome Back!</h1>
                <p className="text-lg font-light w-full text-center">To listen to music with us, please log in using your personal information.</p>
                <NavLink to={'/auth/register'}>
                    <Button label="Sign Up" className="bg-white" />
                </NavLink>
        </motion.div>
    );
};