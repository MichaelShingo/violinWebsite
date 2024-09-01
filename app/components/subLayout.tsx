'use client';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion"

import { useAppSelector } from "@/redux/store";
import { FC, ReactNode } from "react";
import Navbar from './navbar/Navbar';
import LanguageToggle from './language/languageToggle';

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

    const calculateOpacity = (): string => {
        if (isStartingTransition) {
            return '0%';
        }
        if (isEndingTransition) {
            return '100%';
        }
        return '100%';
    }

    return (
        <>

            <Navbar />
            <div id={selectAnimationId()} className="page-transition bg-blak pointer-events-none fixed left-0 top-0 z-[999] flex h-screen w-screen -translate-y-[0] items-center justify-center opacity-0 backdrop-blur-md" style={{

            }}>
                <motion.div animate={{ x: 10 }} className="stickyu flex aspect-square h-[250px] w-[250px] items-center justify-center overflow-hidden rounded-full bg-transparent">
                    <div className="flex scale-x-[300%] scale-y-[1000%] items-center justify-center">
                        <Player loop autoplay src="/squiggle.json" />
                    </div>
                </motion.div>
            </div>
            <div className="transition-all duration-500" style={{
                opacity: calculateOpacity()
            }}>
                {children}
            </div>
        </>);
}

export default SubLayout;