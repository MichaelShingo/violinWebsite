'use client';

import { setIsEndingTransition, setIsStartingTransition } from "@/redux/features/locationSlice";
import { useAppSelector } from "@/redux/store";
import Link, { LinkProps } from "next/link";
import { useRouter } from "@/i18n/routing";
import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";
import { useDispatch } from 'react-redux';

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: FC<TransitionLinkProps> = ({ children, href, ...props }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isStartingTransition: boolean = useAppSelector(
        (state) => state.locationReducer.value.isStartingTransition
    );
    const isEndingTransition: boolean = useAppSelector(
        (state) => state.locationReducer.value.isEndingTransition
    );

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // const transitionDiv: HTMLDivElement | null = 
        e.preventDefault();
        dispatch(setIsStartingTransition(true));
        // transitionDiv.classList.add('page-transition')
        await sleep(300);
        dispatch(setIsStartingTransition(false));
        dispatch(setIsEndingTransition(true));
        router.push(href);
        await sleep(300);
        dispatch(setIsEndingTransition(false));
    }

    return (<Link color="white" onClick={handleTransition} href={href} {...props}>{children}</Link>);
}

export default TransitionLink;