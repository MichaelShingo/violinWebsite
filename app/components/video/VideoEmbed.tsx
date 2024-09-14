'use client';
import { useAppSelector } from "@/redux/store";
import { FC, useEffect, useState } from "react";

interface VideoEmbedProps {
    link: string;
}

const VideoEmbed: FC<VideoEmbedProps> = ({ link }) => {
    const windowWidth: number = useAppSelector(
        (state) => state.windowReducer.value.windowWidth
    );

    console.log(windowWidth);

    return (
        <div className="relative flex h-0 w-full items-center justify-center pb-[56.25%]">
            <iframe
                className="absolute left-0 top-0 h-full w-full"
                width={(windowWidth / 2).toString()}
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div >
    );
};

export default VideoEmbed;
