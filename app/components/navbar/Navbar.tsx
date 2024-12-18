'use client';
import { FC, ReactNode, useEffect, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { menuItems } from "./BlobMenu";

interface NavbarLinkProps {
    children: ReactNode,
    url: string,
    navbarTransform: boolean;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, url, navbarTransform }) => {
    return (<Link href={url} className={twMerge('text-4xl uppercase')}>{children}</Link>
    );
};

const Navbar = () => {
    const t = useTranslations('Navbar');
    const [navbarTransform, setNavbarTransform] = useState<boolean>(false);
    const cn = ['fixed z-[1000] overflow-hidden flex h-[85px] w-[100vw] flex-row items-center justify-center gap-24 transition-all duration-500'];
    useEffect(() => {
        const handleScroll = () => {
            scrollY > window.innerHeight - 100 ? setNavbarTransform(true) : setNavbarTransform(false);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={twJoin(cn)}
            style={{
                backgroundColor: navbarTransform ? 'rgba(255, 255, 255, 1)' : 'transparent',
                color: navbarTransform ? 'black' : 'white',
                boxShadow: navbarTransform ? '0 1px 10px rgba(0, 0, 0, 0.3)' : 'none',
                backdropFilter: navbarTransform ? 'blur(5px)' : 'none',

            }}>
            <div className="absolute -z-10">

            </div>
            {menuItems.map((item) => (
                <NavbarLink navbarTransform key={item.link} url={item.link}>{t(item.label)}</NavbarLink>
            ))}
        </div>
    );
};

export default Navbar;