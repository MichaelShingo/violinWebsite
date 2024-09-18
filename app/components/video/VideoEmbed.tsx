'use client';
import { useAppSelector } from "@/redux/store";
import { FC, useEffect, useState } from "react";

interface VideoEmbedProps {
}

const VideoEmbed: FC<VideoEmbedProps> = () => {
    const windowWidth: number = useAppSelector(
        (state) => state.windowReducer.value.windowWidth
    );
    const windowHeight: number = useAppSelector((state) => state.windowReducer.value.windowHeight);
    const link: string = useAppSelector(
        (state) => state.locationReducer.value.currentVideo
    );

    const factor = Math.min(windowWidth, windowHeight) / 1920;

    return (
        <iframe
            className=""
            width={1920 * factor}
            height={1080 * factor}
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};

export default VideoEmbed;
