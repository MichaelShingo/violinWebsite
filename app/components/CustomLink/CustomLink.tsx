import { Link } from "@/i18n/routing";
import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface CustomLinkProps {
    href: string;
    children: ReactNode;
}
const CustomLink: FC<CustomLinkProps> = ({ href, children }) => {
    return (
        <Link className={twJoin(['text-secondary underline transition hover:opacity-85 w-fit'])} href={href}>
            {children}
            {/* <div className="w- h-full bg-black" /> */}
        </Link>
    );
};

export default CustomLink;