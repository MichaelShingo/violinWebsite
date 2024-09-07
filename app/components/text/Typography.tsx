import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps {
    variant: TypographyVariant;
    children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, children }) => {
    const generateVariant = (): ReactNode => {
        let res;
        switch (variant) {
            case 'h1':
                res = <h1 className="self-start text-[10rem] uppercase text-black">{children}</h1>;
                break;
            case 'h2':
                res = <motion.h2 viewport={{ once: true }} transition={{ delay: 0 }} initial={{ opacity: '0%' }} whileInView={{ opacity: '100%' }} className="my-8 -translate-x-[10px] text-6xl uppercase text-black first-letter:text-8xl">{children}</motion.h2>;
                break;
            case 'p':
                res = <motion.p viewport={{ once: true }} transition={{ delay: 0.3 }} initial={{ opacity: '0%' }} whileInView={{ opacity: '100%' }} className="my-5 text-justify text-2xl leading-[2.7rem] text-black">{children}</motion.p>;
            default:
                break;
        }
        return res;
    };

    return (
        <>
            {generateVariant()}
        </>
    );
};

export default Typography;