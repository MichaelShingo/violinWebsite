'use client';
import { FC, ReactNode } from "react";
import BlobMenu from "../components/navbar/BlobMenu";
import { ReactLenis } from 'lenis/react';
import WindowEvents from "../components/eventHandlers/windowEvents";
import Modal from "../components/modal/Modal";
import LanguageToggle from "../components/language/LanguageToggle";

interface SubLayoutProps {
    children: ReactNode;
}
const SubLayout: FC<SubLayoutProps> = ({ children }) => {

    return (
        <>
            <Modal />
            <BlobMenu />
            <LanguageToggle />
            <ReactLenis root>
                {children}
            </ReactLenis>
            <WindowEvents />
        </>
    );
};

export default SubLayout;