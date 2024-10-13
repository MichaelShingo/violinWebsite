import { standardPadding } from "@/app/constants/styleConstants";
import { FC, ReactNode, useState } from "react";
import { twJoin } from "tailwind-merge";
import Typography from "../text/Typography";
import Button from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";

export type Tab = {
    title: string;
    content: ReactNode;
    bgImageUrl?: string;
    videoUrl?: string;
};

interface TabsProps {
    tabs: Tab[];

}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const cn = [tabs[selectedTab].bgImageUrl];


    return (
        <div className={twJoin([...cn, " flex items-start justify-center border-black"])}

        >
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={tabs[selectedTab].bgImageUrl} // Key the motion.div by the background image URL
                    className="absolute h-full w-full bg-cover bg-center" style={{
                        backgroundImage: `url(${tabs[selectedTab].bgImageUrl})`
                    }} />
            </AnimatePresence>
            <div className="absolute mt-4 flex flex-row items-center justify-center">
                {tabs.map((tab, index) => (
                    <div
                        className={twJoin(['border-[2px] border-3px   backdrop-blur-sm mx-2 px-4 py-2  transition duration-500 cursor-pointer', selectedTab === index ? 'border-accent bg-secondary/55 hover:bg-secondary/75' : 'border-white bg-black/25 hover:bg-black/65'])}
                        key={index}
                        onClick={() => setSelectedTab(index)}
                    >
                        <Typography variant="h4" color={selectedTab === index ? 'text-white' : 'text-white'}>{tab.title}</Typography>
                    </div>
                ))}
            </div>
            <div className="flex h-dvh min-h-dvh w-[25%] flex-col items-center justify-center gap-20">
                <Button className="relative z-10" variant="primary" size="large">Watch a Video</Button>
                <motion.div
                    key={tabs[selectedTab].title} // Key the motion.div by the tab title
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={twJoin(['bg-white w-full z-10 relative transition duration-500 hover:scale-120'])}
                >
                    {tabs[selectedTab].content}
                </motion.div>
            </div >

        </div>
    );
};

export default Tabs;