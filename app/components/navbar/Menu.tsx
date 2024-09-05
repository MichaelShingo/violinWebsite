import { twJoin } from "tailwind-merge";

const Menu = () => {
    return (
        <div className={twJoin(['absolute w-full h-full z-[1000] flex items-center justify-center'])}>
            <div className={twJoin(['w-fit h-fit scale-[100%]'])}>

            </div>
        </div>);
}

export default Menu;