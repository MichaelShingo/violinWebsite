'use client';
import { FC, ReactNode } from "react";
import Typography from '../../components/text/Typography';
import { motion, useScroll, useTransform } from "framer-motion";
interface PageLayoutProps {
    title: string;
    children: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
    const { scrollYProgress } = useScroll();
    const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const filter = useTransform(scrollYProgress, val => `blur(${val * 50}px) brightness(${1})`);

    return (<>
        <motion.div
            className="fixed -z-10 flex h-[100vh] w-[100vw] -translate-y-[0px] flex-col justify-stretch overflow-hidden bg-[url('/alexTranProposal3.jpg')] bg-cover bg-no-repeat pb-5"
            style={{
                filter,
                // scale,
                translateY,
            }}>
            <div className="absolute z-0 h-full w-full bg-black-trans"></div>
        </motion.div>
        <div className="h-[100vh] w-[100vw]" />

        <div className="flex flex-col items-center gap-5 bg-white px-28 py-12">
            <Typography variant="h1">{title}</Typography>
            <div className="h-fit w-[50%] max-w-[750px]">
                {children}
            </div>
            <div className="h-[300px] w-full"></div>
        </div >


    </>
    );
};

export default PageLayout;