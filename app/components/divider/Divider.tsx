import { FC, ReactNode } from "react";
import TrebleIcon from "../icons/TrebleClef";
import { twJoin, twMerge } from "tailwind-merge";

export enum DividerVariant {
    Small = 'small',
    Large = 'large',
}
interface DividerProps {
    variant: DividerVariant;
    icon: ReactNode;
    color?: string;
    iconColor?: string;
}
const Divider: FC<DividerProps> = ({ variant, icon, color = 'bg-gray-200', iconColor = 'fill-gray-200' }) => {
    const cn = [color];
    const cnIcon = [];

    return (
        <div className={twJoin("my-24 h-[4px] w-full", cn)}>
            <div className="h-36 w-full -translate-y-[50%]">
                {icon}
            </div>
        </div>
    );
}

export default Divider;