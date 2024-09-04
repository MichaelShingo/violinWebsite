import { twJoin } from "tailwind-merge";
import WavyCircle from "../transitionLink/WavyCircle";

const Menu = () => {
    return (
        <div className={twJoin(['absolute w-full h-full z-[1000] flex items-center justify-center'])}>
            <div className={twJoin(['w-fit h-fit scale-[100%]'])}>

                <WavyCircle />
            </div>
        </div>);
}

export default Menu;