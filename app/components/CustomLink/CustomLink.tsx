import { Link } from "@/i18n/routing";
import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface CustomLinkProps {
    color?: string;
    href: string;
    children: ReactNode;
}
const CustomLink: FC<CustomLinkProps> = ({ color, href, children }) => {
    const cn = [' underline transition hover:opacity-85 w-fit'];
    color ? cn.push(color) : cn.push('text-secondary');
    return (
        <Link className={twJoin([...cn])} href={href}>
            {children}
        </Link>
    );
};

export default CustomLink;