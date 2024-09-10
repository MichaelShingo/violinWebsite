'use client';
import { FC, ReactNode } from "react";
import Typography from '../../components/text/Typography';
import { motion, useScroll, useTransform } from "framer-motion";
import { twJoin } from "tailwind-merge";
import Divider from "../divider/Divider";
import BassClef from "../contact/BassClef";
import Footer from "../footer/Footer";
interface PageLayoutProps {
    title: string;
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

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const filter = useTransform(scrollYProgress, val => `blur(${val * 50}px) brightness(${1})`);
    const arrowCn = 'absolute h-[4px] w-16 rounded-sm bg-white';

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
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
                className="absolute bottom-0 left-[50vw] z-50 flex h-[100px] w-[100px] cursor-pointer flex-row items-center justify-center"
            >
                <div className={twJoin([arrowCn, '-translate-x-[34%] rotate-45'])} />
                <div className={twJoin([arrowCn, 'translate-x-[34%] -rotate-45'])} />
            </motion.button >
            <motion.div
                className="fixed -z-20 flex h-[100vh] w-[100vw] flex-col justify-stretch overflow-hidden bg-[url('/alexTranProposal3.jpg')] bg-cover bg-no-repeat pb-5"
                initial={{ opacity: 0, scale: '105%' }}
                animate={{ opacity: 1, scale: '100%' }}
                transition={{ delay: 0, duration: 1, }}
                style={{
                    // filter,
                    translateY,
                }}>
                <div className="absolute z-0 h-full w-full bg-black-trans"></div>
            </motion.div>
            <div className="h-[100vh] w-[100vw]" />
            <div className="z-10 flex flex-col items-center gap-5 bg-white px-28 py-12">
                <Typography variant="h1">{title}</Typography>
                <div className="h-fit w-[50%] max-w-[750px]">
                    {children}
                </div>
                <div className="h-[300px] w-full"></div>
            </div>
            <Footer />

        </>
    );
};

export default PageLayout;