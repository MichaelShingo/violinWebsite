import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'transparent';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
}

const Button: FC<ButtonProps> = ({ variant, isLoading, onClick, children, className, size }) => {
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
            cn.push('sm:w-[250px] h-[70px] md:w-[350px] md:h-[100px] px-4 md:px-8');
            cnText.push('text-md sm:text-xl md:text-3xl');
        default:
            cn.push('text-xl');
    }

    switch (variant) {
        case 'primary':
            cn.push('hover:bg-accent hover:text-black bg-black text-white');
            break;
        case 'transparent':
            cn.push('border-[3px] border-white px-8 py-3 text-lg text-white hover:border-white hover:bg-white hover:text-secondary md:border-[4px] md:px-10 md:py-4 md:text-3xl');
            break;
        case 'secondary':
        default:
            cn.push('hover:bg-black hover:text-white');
            break;
    }
    return (
        <button onClick={onClick} className={twJoin([...cn, 'w-fit min-w-[100px] md:min-w-[200px] border-[3px] border-black p-3 transition duration-500'])}>
            <p className={twJoin([...cnText])}>
                {isLoading ? 'Loading...' : children}
            </p>
        </button>
    );
};

export default Button;