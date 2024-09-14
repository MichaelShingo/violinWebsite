import { FC, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
import VideoEmbed from "./VideoEmbed";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import PlayIcon from "../icons/PlayIcon";

export type VideoData = {
    label: string;
    link: string;
    isDefault?: boolean;
};

interface VideoSectionProps {
    data: VideoData[];
}





const VideoSection: FC<VideoSectionProps> = ({ data }) => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });
    const scale = useTransform(scrollYProgress, [0, 1], ['0%', "3000%"]);
    const x = useTransform(scrollYProgress, [0, 1], ['50%', "-500%"]);
    const xBackground = useTransform(scrollYProgress, [0, 1], ['10%', "-10%"]);
    const [areCardsVisible, setAreCardsVisible] = useState<boolean>(false);
    const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div ref={scrollContainerRef} className={twJoin([
            'h-[300vh] overflow-x-hidden sm:overflow-x-visible my-48',
        ])}>
            <motion.div className="w-[100vw] h-[100vh] sticky justify-center flex items-center top-0 left-0 ">
                <motion.div style={{ scale, x, transformOrigin: 'left' }} className="">
                    <PlayIcon className="" size="50%" />
                </motion.div>
                <motion.div style={{ x: xBackground }} className="absolute top-0 w-full h-full bg-[url('/mediaButtonScattered.svg')] bg-cover bg-no-repeat"></motion.div>
            </motion.div>

        </div >
    );
};

export default VideoSection;
