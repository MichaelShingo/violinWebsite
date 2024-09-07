import { useAppSelector } from "@/redux/store";
import { FC } from "react";
import { twJoin } from "tailwind-merge";
import { CommonIconProps } from "../icons/utils";
import { useDispatch } from "react-redux";
import { setHoveredMenuInfo, setIsMenuHovered, setIsMenuOpen } from "@/redux/features/locationSlice";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export type MenuItem = {
    label: string;
    link: string;
    icon: FC<CommonIconProps>;
    menuPosition: 'center' | 'right';
};

interface MenuItemProps {
    item: MenuItem;
    index: number;
    itemsLength: number;
    pathname: string;
}

const MenuCircle: FC<MenuItemProps> = ({ item, index, itemsLength, pathname }) => {
    const t = useTranslations('Navbar');
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen);
    const dispatch = useDispatch();
    const menuDegreeIncrements = 2 * Math.PI / itemsLength;
    const isCurrentPage = pathname === item.link;
    const radius = 165;
    const yCoordinate = radius * Math.sin(menuDegreeIncrements * index);
    const xCoordinate = radius * Math.cos(menuDegreeIncrements * index);

    const handleMouseEnter = () => {
        dispatch(setHoveredMenuInfo(t(item.label)));
        dispatch(setIsMenuHovered(true));
    };

    const handleMouseLeave = () => {
        dispatch(setIsMenuHovered(false));
    };

    return (
        <Link href={item.link} onClick={() => dispatch(setIsMenuOpen(false))}>
            <button
                className={twJoin([
                    'group absolute duration-500 h-24 w-24 flex justify-center items-center transform rounded-full transition-transform bg-green-light cursor-pointer',
                    isMenuOpen ? 'pointer-events-auto hover:bg-green-extra-light' : 'pointer-events-none',
                    isCurrentPage ? 'border-white border-double border-[3px]' : 'border-none',
                ])}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isMenuOpen ? `scale(100%) translateY(${yCoordinate}px) translateX(${xCoordinate}px)` : 'scale(0%) translateY(0px) translateX(0px)',
                    transitionDelay: `${index / 10}s`
                }}
            >
                <div className="pointer-events-none flex h-full w-full rotate-[90deg] items-center justify-center">
                    <item.icon className="rotate-90" pathClassName="fill-green-extra-light group-hover:fill-green-light" size="60%" />
                </div>
            </button>
        </Link >
    );
};

export default MenuCircle;