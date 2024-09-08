import { setIsMenuOpen } from "@/redux/features/locationSlice";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { twJoin } from "tailwind-merge";



const DumbBarAnimation = () => {
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen);

    const sticksCommonStyles = twJoin(['z-10 h-[8px] rounded-full bg-green-light transition hover:duration-300', isMenuOpen ? 'scale-0' : 'scale-100']);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsMenuOpen(!isMenuOpen));
    };
    return (
        <button onClick={handleClick} className={twJoin(['group absolute z-50 flex h-16 w-16 flex-col items-end justify-center gap-2'])}>
            <div className={twJoin([
                sticksCommonStyles,
                'w-16 origin-right ',
            ])} />
            <div className={twJoin([
                sticksCommonStyles,
                'w-14 origin-right ',

            ])} />
            <div className={twJoin([
                sticksCommonStyles,
                'w-16 origin-right ',
            ])} />
            <div className={twJoin([
                sticksCommonStyles,
                'w-16 origin-right ',
                isMenuOpen ? 'rotate-45 -translate-x-3' : 'group-hover:scale-x-[75%]'])} />
        </button>
    );
};
const Hamburger = () => {
    const isMenuOpen: boolean = useAppSelector((state) => state.locationReducer.value.isMenuOpen);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsMenuOpen(!isMenuOpen));
    };

    const sticksCommonStyles = twJoin(['z-10 h-[8px] rounded-full bg-green-light transition hover:transition-none', 'bg-green-light', 'group-hover:bg-green-extra-light']);

    return (
        <button tabIndex={-1} onClick={handleClick} className={twJoin(['group pointer-events-auto absolute z-50 flex h-16 w-16 flex-col items-end justify-center gap-2 active:opacity-0'])}>
            <div className={twJoin([
                sticksCommonStyles,
                'w-16 origin-center ',
                isMenuOpen ? 'rotate-45 translate-y-[17px]' : 'rotate-0'
            ])} />
            <div className={twJoin([
                sticksCommonStyles,
                'w-14 origin-right ',
                isMenuOpen ? 'scale-0' : 'scale-100'

            ])} />
            <div className={twJoin([
                sticksCommonStyles,
                'w-16 origin-center ',
                isMenuOpen ? '-rotate-45 -translate-y-[13px]' : 'rotate-0'

            ])} />


        </button>
    );
};

export default Hamburger;