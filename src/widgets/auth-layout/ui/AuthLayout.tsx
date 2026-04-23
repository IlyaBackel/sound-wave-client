import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthInfo } from './AuthInfo';

const AuthLayout = () => {
    const location = useLocation();
    const isRegister = location.pathname === '/auth/register';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='flex items-center justify-center w-screen'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname} // перерендер при смене пути
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-row items-center h-[50vh] justify-center w-full"
                    >
                        {isRegister ? (
                            <>
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="flex flex-row items-center h-[50vh] justify-center w-[60%] shadow-xl rounded-2xl overflow-hidden"
                                >

                                    <Outlet />
                                    <AuthInfo type='register' />
                                </motion.div>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="flex flex-row items-center h-[50vh] justify-center w-[60%] shadow-xl rounded-2xl overflow-hidden"
                                >
                                    <AuthInfo type='login' />
                                    <Outlet />

                                </motion.div>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AuthLayout;
