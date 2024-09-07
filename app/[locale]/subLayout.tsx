'use client';
import { useAppSelector } from "@/redux/store";
import { FC, ReactNode } from "react";
import BlobMenu from "../components/navbar/BlobMenu";
import LanguageToggle from "../components/language/LanguageToggle";

interface SubLayoutProps {
    children: ReactNode;
}
const SubLayout: FC<SubLayoutProps> = ({ children }) => {
    const isStartingTransition: boolean = useAppSelector(
        (state) => state.locationReducer.value.isStartingTransition
    );
    const isEndingTransition: boolean = useAppSelector(
        (state) => state.locationReducer.value.isEndingTransition
    );

    const selectAnimationId = (): string => {
        if (isEndingTransition) {
            return 'end-page-transition';
        }
        else if (isStartingTransition) {
            return 'start-page-transition';
        } else {
            return '';
        }
    };

    const calculateOpacity = (): string => {
        if (isStartingTransition) {
            return '0%';
        }
        if (isEndingTransition) {
            return '100%';
        }
        return '100%';
    };

    return (
        <>
            <BlobMenu />
            <LanguageToggle />
            {/* <Menu /> */}
            <div id={selectAnimationId()} className="page-transition bg-blak pointer-events-none fixed left-0 top-0 z-[999] flex h-screen w-screen -translate-y-[0] items-center justify-center opacity-0" style={{
            }}>
            </div>
            {/* <div className="transition-all duration-500" style={{
                opacity: calculateOpacity()
            }}> */}
            {children}
            {/* </div> */}
        </>);
};

export default SubLayout;