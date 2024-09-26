import { FC, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twJoin } from "tailwind-merge";

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps {
    variant: TypographyVariant;
    className?: string;
    color?: string;
    sticky?: boolean;
    children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, className, color, sticky, children }) => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, val => val < 0.2 ? `${val - 50}vh` : '0vh');
    const cn = [className];

    color ? cn.push(color) : cn.push('text-black');
    sticky ? cn.push('sticky left-0 top-0') : cn.push('relative');

    const generateVariant = (): ReactNode => {
        let res;
        switch (variant) {
            case 'h1':
                res = <motion.h1 style={{}} className={twJoin([...cn, 'w-full text-[10rem] uppercase'])}>{children}</motion.h1>;
                break;
            case 'h2':
                res = <motion.h2 viewport={{ once: true }} transition={{ delay: 0 }} initial={{ opacity: '0%' }} whileInView={{ opacity: '100%' }} className={twJoin([...cn, 'my-8 -translate-x-[10px] text-8xl uppercase'])}>{children}</motion.h2>;
                break;
            case 'p':
                res = <p className="font-paragraph text-2xl font-thin text-black">{children}</p>;
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