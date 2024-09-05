import { useAppSelector } from "@/redux/store";
import { FC } from "react";
import { twJoin } from "tailwind-merge";
import { CommonIconProps } from "../icons/utils";
import { useDispatch } from "react-redux";
import { setHoveredMenuInfo } from "@/redux/features/locationSlice";

export type MenuItem = {
    label: string;
    link: string;
    icon: FC<CommonIconProps>;
}

interface MenuItemProps {
    item: MenuItem;
    index: number;
    itemsLength: number;

}
const MenuItem: FC<MenuItemProps> = ({ item, index, itemsLength }) => {
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen);
    const dispatch = useDispatch();
    const menuDegreeIncrements = 2 * Math.PI / itemsLength;
    const radius = 165;
    const yCoordinate = radius * Math.sin(menuDegreeIncrements * index);
    const xCoordinate = radius * Math.cos(menuDegreeIncrements * index);

    return (
        <button
            className={twJoin([
                'group absolute duration-500 h-24 w-24 flex justify-center items-center transform rounded-full transition-transform bg-green-light cursor-pointer',
                isMenuOpen ? 'hover:scale-[120%] hover:bg-green-extra-light scale-[100%]' : 'scale-0',
            ])}
            onMouseEnter={() => dispatch(setHoveredMenuInfo(item.label))}
            onMouseLeave={() => dispatch(setHoveredMenuInfo(null))}
            style={{
                transform: isMenuOpen ? `translateY(${yCoordinate}px) translateX(${xCoordinate}px)` : ' translateY(0px) translateX(0px)',
                transitionDelay: `${index / 10}s`
            }}>
            <div className="flex h-full w-full rotate-[90deg] items-center justify-center">
                <item.icon className="rotate-90" pathClassName="fill-green-extra-light group-hover:fill-green-light" size="60%" />
            </div>
        </button>
    );
}

export default MenuItem;