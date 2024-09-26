import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';


const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
};

interface FullWidthButtonProps {
    

const FullWidthButton = () => {
    return (
        <motion.button
            variants={buttonVariants}
            animate={{ opacity: isExiting ? '0%' : '100%', transition: { duration: 0.6 } }}
            onClick={() => handleClick(item.link)}
            className={twJoin([
                'group relative w-dvw',
                isExiting ? 'pointer-events-none' : 'pointer-events-auto',
            ])}
        >
            <h4 className="relative z-50 p-5 text-6xl text-primary transition duration-500 group-hover:text-white">
                {item.label}
            </h4>
            <div className={twJoin([
                'h-full bg-gradient-to-r  from-secondary to-accent -translate-x-[100%] group-hover:translate-x-[0%]  -translate-y-[100%] transition duration-500 -z-50',
            ])} />
        </motion.button>
    );
};

export default FullWidthButton;