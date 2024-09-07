'use client';
import { FC } from "react";
import Hamburger from "./Hamburger";
import WavyCircle from "../transitionLink/WavyCircle";
import { twJoin } from "tailwind-merge";
import { useAppSelector } from "@/redux/store";
import HomeIcon from "../icons/HomeIcon";
import ViolinIcon from "../icons/ViolinIcon";
import PenIcon from "../icons/PenIcon";
import EighthNoteArrowIcon from "../icons/EighthNoteArrowIcon";
import EmailIcon from "../icons/EmailIcon";
import MenuCircle, { MenuItem } from "./MenuCircle";
import { usePathname } from "@/i18n/routing";

export const menuItems: MenuItem[] = [
    {
        label: 'home',
        link: '/',
        icon: HomeIcon,
        menuPosition: 'center',
    },
    {
        label: 'violin',
        link: '/violinist-in-tokyo',
        icon: ViolinIcon,
        menuPosition: 'right',
    },
    {
        label: 'composition',
        link: '/classical-composer-in-tokyo',
        icon: PenIcon,
        menuPosition: 'right',
    },
    {
        label: 'arranging',
        link: '/music-arranger-in-tokyo',
        icon: EighthNoteArrowIcon,
        menuPosition: 'right',
    },
    {
        label: 'contact',
        link: '/contact-violinist-in-tokyo',
        icon: EmailIcon,
        menuPosition: 'right',
    }
];

const BlobMenu: FC = () => {
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen);
    const isMenuHovered: boolean = useAppSelector((state) => state.locationReducer.value.isMenuHovered);
    const hoveredMenuInfo: string = useAppSelector((state) => state.locationReducer.value.hoveredMenuInfo);
    const pathname = usePathname();

    const isRightLink = menuItems.filter(item => item.menuPosition === 'right').map(item => item.link).includes(pathname);

    const calcMenuPosition = () => {
        let res: string = '';
        if (isMenuOpen) {
            res = 'translate-y-[35vh]';
        } else {
            if (isRightLink) {
                res = 'translate-x-[45vw]';
            }
        }
        return res;
    };


    return (
        <div className={twJoin([
            'fixed z-[100] h-dvh w-dvw transition duration-700 flex justify-center',
            isMenuOpen ? 'bg-black/75 backdrop-blur-md pointer-events-auto' : 'bg-transparent pointer-events-none'])}>
            <h1 className={twJoin([
                'z-50 text-[9rem] text-gray-300 uppercase bold duration-500 transition pointer-events-none',
                isMenuHovered ? 'opacity-100' : 'opacity-0'
            ])}
            >
                {hoveredMenuInfo}
            </h1>

            <div className={twJoin([
                'pointer-events-none absolute flex h-[175px] w-[175px] items-center  justify-center transition duration-700',
                calcMenuPosition(),
            ])}>
                <Hamburger />
                <div
                    className={twJoin(['absolute -z-10 w-24 h-24 transition duration-700 pointer-events-auto', isMenuOpen ? '-rotate-[90deg]' : 'rotate-45'])}
                >
                    {menuItems.map((item, index) => (
                        <MenuCircle key={index} item={item} index={index} pathname={pathname} itemsLength={menuItems.length} />
                    ))}
                </div>
                <div className={twJoin([isMenuOpen ? 'scale-[55%]' : isRightLink ? 'scale-[35%]' : 'scale-[45%]', 'transition duration-700'])}>
                    <WavyCircle waves1={4} waves2={7} />
                </div>
            </div>
        </div>
    );
};

export default BlobMenu;