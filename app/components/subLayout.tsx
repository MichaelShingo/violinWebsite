'use client';

import { useAppSelector } from "@/redux/store";
import { FC, ReactNode } from "react";

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
            return ''
        }
    }

    return (<>
        <div id={selectAnimationId()} className="page-transition pointer-events-none absolute left-0 top-0 z-[1000] h-screen w-screen -translate-y-[100%] bg-red-200 opacity-100" style={{

        }}></div>
        {children}</>);
}

export default SubLayout;