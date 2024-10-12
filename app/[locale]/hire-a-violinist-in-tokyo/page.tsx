'use client';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import VideoSection, { VideoData } from '@/app/components/video/VideoSection';
import HorizontallyScrollingCards from '@/app/components/horizontallyScrollingCards/HorizontallyScrollingCards';
import { twJoin } from 'tailwind-merge';
import Typography from '@/app/components/text/Typography';
import { useTranslations } from 'next-intl';
import { standardPadding } from '@/app/constants/styleConstants';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/redux/store';
import { formatTranslation } from '@/app/utils/formatTranslation';
import PlainTextSection from '@/app/components/PlainTextSection/PlainTextSection';
import ImageSection from '@/app/components/ImageSection/ImageSection';
import Tabs, { Tab } from '@/app/components/Tabs/Tabs';
import SoloViolin from './SoloViolin';

const tabs: Tab[] = [
    {
        title: 'Solo Violin',
        content: <SoloViolin />,
        bgImageUrl: '/alexTranProposal1.jpg'

    },
    {
        title: 'Violin and Cello Duo',
        content: 'The violin and cello duo is a great option for those who want a rich, full sound without the need for additional musicians. The duo is able to perform a wide variety of music, from classical to pop, and is perfect for weddings, corporate events, and private parties.',
        bgImageUrl: '/angelo07.jpg'
    },
    {
        title: 'Violin and Piano Duo',
        content: 'Only available if there is a piano at the venue! The violin and cello duo is a great option for those who want a rich, full sound without the need for additional musicians. The duo is able to perform a wide variety of music, from classical to pop, and is perfect for weddings, corporate events, and private parties.',
        bgImageUrl: '/lanceRecital.jpg'
    },
    {
        title: 'Violin Duo',
        content: 'The violin and cello duo is a great option for those who want a rich, full sound without the need for additional musicians. The duo is able to perform a wide variety of music, from classical to pop, and is perfect for weddings, corporate events, and private parties.',
        bgImageUrl: '/alexTranProposal3.jpg'
    },
    {
        title: 'String Trio',
        content: 'The string trio is a more intimate ensemble that is perfect for smaller venues or events. The trio is able to perform a wide variety of music, from classical to pop, and is perfect for weddings, corporate events, and private parties.',
        bgImageUrl: '/churchWedding3.jpg'
    },
    {
        title: 'String Quartet',
        content: 'The string quartet is a classic ensemble that can perform a wide variety of music, from classical to pop. The quartet is perfect for weddings, corporate events, and private parties, and is able to provide a rich, full sound that is sure to impress your guests.',
        bgImageUrl: '/parkerWedding.jpg'
    }
];

const concertTextStyles = 'text-xl md:text-5xl text-center border-[2px] border-black w-[110%] last-of-type:border-b-[4px] first-of-type:border-t-[4px] p-7 md:p-10 hover:bg-secondary transition duration-500 hover:text-white';

const Violinist = () => {
    const t = useTranslations('Weddings');
    const ref = useRef<HTMLDivElement>(null);
    const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
    const windowHeight = useAppSelector(state => state.windowReducer.value.windowHeight);
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);

    // reviews 
    // ensemble options in tabs (try to recommend duo, trio, quartet)


    return (
        <PageLayout title={t('title')} backgroundImageUrl="/netherlandsViolin.jpg">
            <Quote source="Brooke R.">
                {formatTranslation(t('quote'))}
            </Quote>
            <PlainTextSection title="Wedding Violin Music in the Heart of Tokyo" paragraphs={[
                'Michael Shingo Crawford is an Tokyo-based violinist who has performed at a wide variety of events, including weddings, marriage proposals, corporate functions, holiday celebrations, private salon concerts, and recitals throughout the United States, the Netherlands, Belgium, China, and Japan.',
                'As experienced musician who has performed at over 200 events as part of ensembles ranging from violin and cello duo, string quartet, solo violin, and string trio, Michael is able to provide a tailored musical experience for every event. ',
                'Michael prides himself on staying true to his classical roots, bringing forth the natural beauty of the violin sound in his performances. To this end, he generally performs without amplification or backing tracks. This grants him the flexibility to perform in a wide variety of settings, and gives him a chance to be more creative with his interpretations, often filling in the harmony and accompanying parts, even while performing solo.'
            ]} />
            <ImageSection src="/cocktailHour.jpg" alt="Violinist in Tokyo hired to perform music at a cocktail hour at a wedding." />
            <PlainTextSection title="Ensembles Options" paragraphs={[
                'Michael is able to provide a variety of ensemble options for your event. The most popular options are the violin and cello duo, string quartet, and string trio. The violin and cello duo is a great option for those who want a rich, full sound without the need for additional musicians. The string quartet is a classic ensemble that can perform a wide variety of music, from classical to pop. The string trio is a more intimate ensemble that is perfect for smaller venues or events.'
            ]} />
            <Tabs tabs={tabs} />
            <PlainTextSection title="Receive a quote for your event!">
                Are you planning and wedding or event in Tokyo and looking for a violinist, or string ensemble to provide music? Do you have additional questions before deciding where ensemble is the best fit for your event? Contact Michael Shingo Crawford for a quote today!
            </PlainTextSection>
            <ImageSection src="/parkerWedding.jpg" alt="Violinist in Tokyo hired to perform music at a cocktail hour at a wedding." />
            <ImageSection src="/alexTranProposal1.jpg" alt="Violinist in Tokyo hired to perform music at a cocktail hour at a wedding." />
            <ImageSection src="/lancewisemanrecital2.jpg" alt="Violinist in Tokyo hired to perform music at a cocktail hour at a wedding." />













        </PageLayout >
    );
};

export default Violinist;
