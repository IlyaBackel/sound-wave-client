import { NavLink } from "react-router";
import { Button } from "../../../shared/ui/Button";
import { motion } from "framer-motion";

export const AuthInfoRegister = () => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-10 items-center justify-center h-full w-[70%]"
        >

            <h1 className="text-4xl font-bold">Hello, Friend!</h1>
            <p className="text-lg font-light w-full text-center">Enter your personal information and start listening to music with us!</p>
            <NavLink to={'/auth/login'}>
                <Button label="Sign In" className="bg-white" />
            </NavLink>
        </motion.div>
    );
};