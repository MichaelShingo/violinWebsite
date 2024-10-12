import { standardPadding } from "@/app/constants/styleConstants";
import { FC, ReactNode, useState } from "react";
import { twJoin } from "tailwind-merge";
import Typography from "../text/Typography";

export type Tab = {
    title: string;
    content: ReactNode;
    bgImageUrl?: string;
};

interface TabsProps {
    tabs: Tab[];

}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const cn = [tabs[selectedTab].bgImageUrl];


    return (
        <div className={twJoin([...cn, "bg-cover bg-center flex items-center justify-center"])}
            style={{
                backgroundImage: `url(${tabs[selectedTab].bgImageUrl})`
            }}
        >
            <div className="mx-14 h-fit min-h-dvh w-[65%] border-y-[3px] border-black">
                <div className="mt-4 flex flex-row items-center justify-center">
                    {tabs.map((tab, index) => (
                        <div
                            className={twJoin(['border-[2px] text-white bg-black mx-2 rounded-md border-transparent px-4 py-2 transition duration-500 cursor-pointer', selectedTab === index ? 'border-secondary bg-secondary' : ''])}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                        >
                            <Typography variant="h4" color="text-white">{tab.title}</Typography>
                        </div>
                    ))}
                </div>
                <div className={twJoin([standardPadding])}>
                    {tabs[selectedTab].content}
                </div>
            </div >
        </div>
    );
};

export default Tabs;