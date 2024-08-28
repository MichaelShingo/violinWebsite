import { FC, ReactNode } from "react";
import TransitionLink from "../transitionLink/TransitionLink";

interface NavbarLinkProps {
    children: ReactNode,
    url: string,
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, url }) => {
    return (<TransitionLink href={url} className="text-4xl uppercase text-white">{children}</TransitionLink>
    );
}

const links = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Violin',
        link: '/violinist-in-tokyo'
    },
    {
        label: 'Composition',
        link: '/classical-composer-in-tokyo'
    },
    {
        label: 'Arranging',
        link: '/music-arranger-in-tokyo'
    },
    {
        label: 'Contact',
        link: '/contact-violinist-in-tokyo'
    }
]

const Navbar = () => {
    return (
        <div className="relative z-50 flex h-[100px] w-[100vw] flex-row items-center justify-center gap-24">
            {links.map((item) => (
                <NavbarLink key={item.link} url={item.link}>{item.label}</NavbarLink>
            ))}
        </div>
    );
}

export default Navbar;