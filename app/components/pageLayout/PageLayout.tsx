'use client';
import { FC, ReactNode, useEffect, useState } from "react";
import Typography from '../../components/text/Typography';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { twJoin } from "tailwind-merge";
import Footer from "../footer/Footer";
import { useAppSelector } from "@/redux/store";

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
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const filter = useTransform(scrollYProgress, val => `blur(${val * 50}px) brightness(${1})`);
    const arrowCn = 'absolute h-[4px] w-12 sm:w-14 rounded-sm bg-white';
    const [scrolledPastHeader, setScrolledPastHeader] = useState(false);
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setScrolledPastHeader(value > 0.2);
    });
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);


    useEffect(() => {
        const img = new Image();
        img.src = backgroundImageUrl;
        if (img.complete) {
            setIsLoaded(true);
        }
        img.addEventListener('load', () => setIsLoaded(true));
    }, [backgroundImageUrl]);

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
                className="fixed -z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat pb-5"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                }}
                initial={{ opacity: 0, scale: '105%' }}
                animate={{ opacity: 1, scale: '100%' }}
                transition={{ delay: 0, duration: 1, }}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-500">
                        <div className="loader">Loading...</div>
                    </div>
                )}
                <div className="absolute z-50 flex h-full w-full items-center justify-center px-0 pb-10 md:px-16 lg:items-end">
                    {!scrolledPastHeader &&
                        <Typography className="text-center md:text-left" variant="h1" color="text-white">{title}</Typography>
                    }
                </div>
                {darkenBackground &&
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