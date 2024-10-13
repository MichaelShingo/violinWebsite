'use client';
import Quote from '../../components/text/Quote';
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


const concertTextStyles = 'text-xl md:text-5xl text-center border-[2px] border-black w-[110%] last-of-type:border-b-[4px] first-of-type:border-t-[4px] p-7 md:p-10 hover:bg-secondary transition duration-500 hover:text-white';

const Violinist = () => {
    const t = useTranslations('Violin');
    const ref = useRef<HTMLDivElement>(null);
    const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
    const windowHeight = useAppSelector(state => state.windowReducer.value.windowHeight);
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);

    const violinVideos: VideoData[] = [
        {
            label: t('newMusic'),
            link: 'https://www.youtube.com/embed/n-EoZHulANI?si=pa5uukL1qCPBrmim',
        },
        {
            label: t('classical'),
            link: 'https://www.youtube.com/embed/FR6tKvGvZOc?si=ct_goRQS_SuJ99c9',
            isDefault: true
        },
        {
            label: t('animeMusic'),
            link: 'https://www.youtube.com/embed/bdCaycB7pyk?si=aUhjiYB_iB0aF3et',
        }
    ];

    useEffect(() => {
        if (ref.current) {
            setBoundingRect(ref.current.getBoundingClientRect());
        }
    }, [ref.current, windowHeight, windowWidth]);


    return (
        <PageLayout title={t('title')} backgroundImageUrl="/alexTranProposal3.jpg">
            <Quote>
                {formatTranslation(t('quote'))}
            </Quote>
            <HorizontallyScrollingCards />
            <VideoSection data={violinVideos} />
            <section className="flex h-fit min-h-[100vh] w-full flex-col items-center justify-center gap-0 overflow-hidden bg-primary">
                <Typography className="text-center" variant="h2">{t('booking')}</Typography>
                <Typography className={standardPadding} variant="p">{t('bookingContent')}</Typography>
                <h3 className={twJoin([concertTextStyles, 'mt-10'])}>{t('orchestraConcerts')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('chamberMusicConcerts')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('soloPerformances')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('weddingsAndSpecialEvents')}</h3>
            </section>
            <section className={twJoin([' overflow-hidden min-h-dvh flex flex-col  items-center justify-center gap-12', standardPadding])}>
                <Typography className={twJoin(['absolute text-center text-white p-5 w-[900px] bg-black'])} variant="h2">{t('biography')}</Typography>
                <Typography className={twJoin(['max-w-[900px]'])} align="justify" variant="p">{t('biographyContent')}</Typography>
            </section>
        </PageLayout >
    );
};

export default Violinist;
