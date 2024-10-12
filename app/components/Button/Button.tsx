import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
    handleClick?: () => void;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ variant, isLoading, handleClick, children }) => {
    const cn = [];

    switch (variant) {
        case 'primary':
            cn.push('hover:bg-accent hover:text-black bg-black text-white');
            break;
        case 'secondary':
        default:
            cn.push('hover:bg-black hover:text-white');
            break;
    }
    return (
        <button onClick={handleClick} className={twJoin([...cn, 'w-fit min-w-[200px] border-[3px] border-black p-3 text-xl transition duration-500'])}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
};

export default Button;