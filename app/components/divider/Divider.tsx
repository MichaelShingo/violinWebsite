import { FC, ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { CommonIconProps } from "../icons/utils";

export enum DividerVariant {
    Small = 'small',
    Large = 'large',
}
interface DividerProps {
    variant: DividerVariant;
    icon: FC<CommonIconProps>;
    color?: string;
    iconColor?: string;
}
const Divider: FC<DividerProps> = ({ variant, icon: Icon, color = 'bg-gray-300', iconColor = 'fill-gray-300' }) => {
    const cn = [color];
    const cnIcon = [];

    return (
        <div className={twJoin("mt-24 mb-9 w-full h-12 ")}>
            <motion.div viewport={{ once: true }} transition={{ delay: 0, duration: 0.6 }} initial={{ height: '4px', width: '0%' }} whileInView={{ width: '100%' }} className="relative bg-gray-300" />
            <motion.div viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.3 }} className="relative bg-transparent" initial={{ scale: '0%', width: '100%', translateY: '-52.5%' }} whileInView={{ scale: '18%' }}>
                <Icon pathClassName={iconColor} />
            </motion.div>
        </div>
    );
}

export default Divider;