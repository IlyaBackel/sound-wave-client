import { motion } from "framer-motion";
import type { FC, SubmitEvent, ReactNode } from "react";

interface IFormProps {
    label: string;
    children: ReactNode;
    onSubmitForm: (event: SubmitEvent<HTMLFormElement>) => void;
}
export const Form: FC<IFormProps> = ({ label, children, onSubmitForm }) => {
    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex h-full w-[50%]"
        >

                <div className="px-6 py-10 flex flex-col gap-6 w-full h-full items-center justify-center">
                    <h1 className="text-center text-4xl font-bold">{label}</h1>
                    <form
                        className="flex flex-col gap-4 items-center-safe"
                        onSubmit={onSubmitForm}>
                        {children}
                    </form>
                </div>
        </motion.div>);
};