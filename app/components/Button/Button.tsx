import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    handleClick?: () => void;
    children: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ variant, isLoading, handleClick, children, className, size }) => {
    const cn = [className];
    const cnText = [];

    switch (size) {
        case 'small':
            cn.push('text-sm');
            break;
        case 'medium':
            cn.push('text-lg');
            break;
        case 'large':
            cn.push('w-[350px] h-[100px]');
            cnText.push('text-3xl');
        default:
            cn.push('text-xl');
    }

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
        <button onClick={handleClick} className={twJoin([...cn, 'w-fit min-w-[200px] border-[3px] border-black p-3 transition duration-500'])}>
            <p className={twJoin([...cnText])}>

                {isLoading ? 'Loading...' : children}
            </p>
        </button>
    );
};

export default Button;