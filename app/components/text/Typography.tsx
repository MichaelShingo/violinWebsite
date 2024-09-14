import { FC, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps {
    variant: TypographyVariant;
    children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, children }) => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, val => val < 0.2 ? `${val - 50}vh` : '0vh');

    const generateVariant = (): ReactNode => {
        let res;
        switch (variant) {
            case 'h1':
                res = <motion.h1 style={{}} className="self-start text-[10rem] uppercase text-black">{children}</motion.h1>;
                break;
            case 'h2':
                res = <motion.h2 viewport={{ once: true }} transition={{ delay: 0 }} initial={{ opacity: '0%' }} whileInView={{ opacity: '100%' }} className="sticky left-0 top-0 my-8 -translate-x-[10px] text-8xl uppercase text-secondary">{children}</motion.h2>;
                break;
            case 'p':
                res = <motion.p viewport={{ once: true }} transition={{ delay: 0.3 }} initial={{ opacity: '0%' }} whileInView={{ opacity: '100%' }} className="my-5 text-justify font-paragraph text-2xl font-light leading-[2.7rem] text-black">{children}</motion.p>;
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