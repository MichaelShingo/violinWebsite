import { FC, useState } from "react";
import { twJoin } from "tailwind-merge";
import VideoEmbed from "./VideoEmbed";

export type VideoData = {
    label: string;
    link: string;
    isDefault?: boolean;
};

interface VideoSectionProps {
    data: VideoData[];
}

const VideoSection: FC<VideoSectionProps> = ({ data }) => {
    const [currentSelection, setCurrentSelection] = useState<string>((data.filter((item) => item.isDefault)[0].label));

    return (
        <div className="z-50 flex h-dvh flex-row overflow-hidden bg-secondary" >
            <div className="flex h-full w-1/2 flex-col justify-evenly">
                {data.map((item) => {
                    const isSelected = currentSelection === item.label;
                    return (
                        <button
                            className={twJoin([
                                'group h-full w-full transition duration-500',
                                isSelected ? 'bg-secondary pointer-events-none' : 'bg-transparent pointer-events-auto'
                            ])}
                            onClick={() => setCurrentSelection(item.label)}
                        >
                            <h3 className={twJoin([
                                'text-8xl text-white transition duration-500 ',
                                isSelected ? 'scale-110 opacity-100' : 'group-hover:scale-100 scale-90 opacity-50'
                            ])}>{item.label}</h3>
                        </button>
                    );
                })}
            </div>
            <div className="flex h-full w-1/2 flex-col justify-evenly">
                {data.map((item) => {
                    const isSelected = currentSelection === item.label;
                    return (
                        <VideoEmbed link={item.link} />
                    );
                })}
            </div>
        </div >
    );
};

export default VideoSection;