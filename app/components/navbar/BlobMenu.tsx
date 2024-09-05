import { FC } from "react";
import Hamburger from "./Hamburger";
import WavyCircle from "../transitionLink/WavyCircle";
import { twJoin } from "tailwind-merge";
import { useAppSelector } from "@/redux/store";
import { menuItems } from "./Navbar";
import MenuItem from "./MenuItem";

const BlobMenu: FC = () => {
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen)

    return (
        <div className="absolute z-[100] h-dvh w-dvw bg-black/75">

            <div className="pointer-events-none flex items-center justify-center">
                <Hamburger />
                <div
                    className={twJoin(['absolute -z-10 w-24 h-24 transition duration-700 pointer-events-auto', isMenuOpen ? '-rotate-[90deg]' : 'rotate-45'])}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} item={item} index={index} itemsLength={menuItems.length} />
                    ))}
                </div>
                <div className={twJoin([isMenuOpen ? 'scale-[55%]' : 'scale-[45%]', 'transition duration-700'])}>
                    <WavyCircle waves1={4} waves2={7} />
                </div>
            </div>
        </div>
    );
}

export default BlobMenu;