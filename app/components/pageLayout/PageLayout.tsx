'use client';
import { FC, ReactNode, useEffect, useState } from "react";
import Typography from '../../components/text/Typography';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { twJoin } from "tailwind-merge";
import Footer from "../footer/Footer";
import { useAppSelector } from "@/redux/store";
import WavyCircle from "../transitionLink/WavyCircle";
import { useAppendImageBreakpoint } from "@/app/customHooks/useAppendImageBreakpoint";
import Image from "next/image";

interface PageLayoutProps {
    title: string;
    backgroundImageUrl: string;
    darkenBackground?: boolean;
    children: ReactNode;
}

const arrowButtonVariants = {
    hidden: {
        translateY: '-20px', opacity: 0,
        transition: {
            delay: 0.5, duration: 1
        }
    },
    visible: {
        translateY: '0px', opacity: 1,

    },
    hover: {
        translateY: '10px',
        opacity: '65%',
        transition: {
            duration: 0.3,
            delay: 0
        }
    }
};

const PageLayout: FC<PageLayoutProps> = ({ title, backgroundImageUrl, darkenBackground = true, children }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { appendImageBreakpoint, breakpoint } = useAppendImageBreakpoint();
    const { scrollYProgress } = useScroll();
    const arrowCn = 'absolute h-[4px] w-12 sm:w-14 rounded-sm bg-white';
    const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setScrolledPastHeader(value > 0.2);
    });

    // useEffect(() => {
    //     const img = new Image();
    //     img.src = appendImageBreakpoint(backgroundImageUrl);
    //     console.log(img.src);
    //     if (img.complete) {
    //         setIsLoaded(true);
    //     }
    //     img.addEventListener('load', () => setIsLoaded(true));
    // }, [backgroundImageUrl, breakpoint]);

    const scrollToContent = () => {
        windowWidth < 700 ? window.scrollTo({
            top: window.innerHeight * 1.5,
            behavior: 'smooth',
        })
            :
            window.scrollTo({
                top: window.innerHeight * 1.25,
                behavior: 'smooth',
            });
    };

    return (
        <>
            <motion.button
                variants={arrowButtonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onClick={scrollToContent}
                className="absolute bottom-0 z-50 flex h-[100px] w-full cursor-pointer flex-row items-center justify-center"
            >
                <div className={twJoin([arrowCn, '-translate-x-[34%] rotate-45'])} />
                <div className={twJoin([arrowCn, 'translate-x-[34%] -rotate-45'])} />
            </motion.button >
            <motion.div
                className="fixed -z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden bg-white pb-5"
                initial={{ opacity: 0, scale: '105%' }}
                animate={{ opacity: 1, scale: '100%' }}
                transition={{ delay: 0, duration: 1, }}
            >
                {!isLoaded && <AnimatePresence>
                    <motion.div
                        initial={{ scale: '0%' }}
                        animate={{ scale: '100%' }}
                        exit={{ scale: '10000%' }}
                        transition={{ duration: 1 }}
                        className="absolute z-[10000] flex h-[100vh] w-[100vw] items-center justify-center"
                    >
                        <WavyCircle waves1={3} waves2={4} />
                    </motion.div>
                </AnimatePresence>
                }
                <motion.div
                    className={twJoin(['absolute h-[110%] w-full overflow-hidden bg-cover bg-no-repeat'])}
                    initial={{ opacity: 0, scale: '105%' }}
                    animate={{ opacity: 1, scale: '100%' }}
                    transition={{ delay: 0, duration: 0.3, }}
                >
                    <Image
                        src={backgroundImageUrl}
                        layout="fill"
                        objectFit="cover"
                        alt="background image"
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                </motion.div>
                <div className="z-50 flex h-full w-full items-center justify-center px-0 pb-10 md:px-16 lg:items-end">
                    {!scrolledPastHeader &&
                        <Typography className="text-center md:text-left" variant="h1" color="text-white">{title}</Typography>
                    }
                </div>
                {darkenBackground && isLoaded &&
                    <div className="absolute z-0 h-[250vh] w-full bg-black-trans"></div>
                }
            </motion.div >
            <div className="h-[100vh] w-[100vw]" />
            <div className="z-10 flex flex-col items-center gap-5 bg-white px-0 py-12">
                <div className="max-w-dvw w-[100%]">
                    {children}
                </div>
            </div>
            <div className="h-[40vh]" />
            <Footer />
        </>
    );
};

export default PageLayout;