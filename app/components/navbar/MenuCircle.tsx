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
        <Link
            scroll={true}
            href={item.link}
            onClick={() => dispatch(setIsMenuOpen(false))}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={twJoin([
                'group absolute flex h-24 w-24 transform items-center justify-center rounded-full bg-secondary transition-transform duration-500 touch-manipulation',
                // Hover styles only on devices with real hover — avoids iOS Safari’s first-tap “hover”, second-tap navigation.
                '[@media(hover:hover)_and_(pointer:fine)]:hover:bg-accent',
                isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
                isCurrentPage ? 'border-accent border-[3px]' : 'border-none',
            ])}
            style={{
                transform: isMenuOpen ? `scale(100%) translateY(${yCoordinate}px) translateX(${xCoordinate}px)` : 'scale(0%) translateY(0px) translateX(0px)',
                transitionDelay: `${index / 10}s`
            }}
        >
            <div className="pointer-events-none flex h-full w-full rotate-[90deg] items-center justify-center">
                <item.icon
                    className="rotate-90"
                    pathClassName="fill-accent [@media(hover:hover)_and_(pointer:fine)]:group-hover:fill-primary"
                    size="60%"
                />
            </div>
        </Link>
    );
};

export default MenuCircle;