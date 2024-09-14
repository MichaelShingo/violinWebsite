import { FC, ReactNode } from "react";

interface GreenTextProps {
    children: ReactNode;
}

const GreenText: FC<GreenTextProps> = ({ children }) => {
    return (
        <span className="font-semibold text-secondary">{children}</span>
    );
};

export default GreenText;