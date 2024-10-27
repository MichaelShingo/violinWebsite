import { useEffect, useState } from 'react';
import { useAppSelector } from "@/redux/store";

export const useAppendImageBreakpoint = () => {
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);
    const [breakpoint, setBreakpoint] = useState('');

    useEffect(() => {
        if (windowWidth < 640) {
            setBreakpoint('640');
        } else if (windowWidth < 1024) {
            setBreakpoint('1024');
        } else {
            setBreakpoint('');
        }
    }, [windowWidth]);

    const appendImageBreakpoint = (url: string) => {
        const indexOfDot = url.lastIndexOf('.');
        return url.substring(0, indexOfDot) + (breakpoint ? `-${breakpoint}` : '') + url.substring(indexOfDot);
    };

    return { appendImageBreakpoint, breakpoint };
};