'use client';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import VideoSection, { VideoData } from '@/app/components/video/VideoSection';
import HorizontallyScrollingCards from '@/app/components/horizontallyScrollingCards/HorizontallyScrollingCards';



const violinVideos: VideoData[] = [
    {
        label: 'New Music',
        link: 'https://www.youtube.com/embed/n-EoZHulANI?si=pa5uukL1qCPBrmim',
    },
    {
        label: 'Classical',
        link: 'https://www.youtube.com/embed/FR6tKvGvZOc?si=ct_goRQS_SuJ99c9',
        isDefault: true
    },
    {
        label: 'Anime Music',
        link: 'https://www.youtube.com/embed/bdCaycB7pyk?si=aUhjiYB_iB0aF3et',
    }
];


const Violinist = () => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });


    return (
        <PageLayout title="Violin">
            <Quote>
                <GreenText>Michael Shingo Crawford</GreenText> is a Tokyo-based violinist, performing classical music, contemporary music, and anime soundtracks.
            </Quote>
            <HorizontallyScrollingCards />
            <VideoSection data={violinVideos} />
        </PageLayout >
    );
};

export default Violinist;
