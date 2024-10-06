import { standardPadding } from "@/app/constants/styleConstants";
import { FC, ReactNode, useState } from "react";
import { twJoin } from "tailwind-merge";

export type Tab = {
    title: string;
    content: ReactNode;
};

interface TabsProps {
    tabs: Tab[];

}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <div className="flex items-center justify-center">
            <div className="mx-14 h-fit min-h-dvh w-[65%] border-y-[3px] border-black">
                <div className="mt-4 flex flex-row items-center justify-center">
                    {tabs.map((tab, index) => (
                        <div
                            className={twJoin(['border-b-[2px] border-transparent px-4 py-2 transition cursor-pointer', selectedTab === index ? 'border-b-secondary' : ''])}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                        >
                            <h3>{tab.title}</h3>
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