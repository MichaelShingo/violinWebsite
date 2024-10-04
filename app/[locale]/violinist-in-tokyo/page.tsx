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


const concertTextStyles = 'text-5xl text-center border-[2px] border-black w-[110%] last-of-type:border-b-[4px] first-of-type:border-t-[4px] p-10 hover:bg-secondary transition duration-500 hover:text-white';

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
                {t('quote')}
            </Quote>
            <HorizontallyScrollingCards />
            <VideoSection data={violinVideos} />
            <section className="flex h-fit min-h-[100vh] w-full flex-col items-center justify-center gap-0 bg-primary">
                <Typography className="text-center" variant="h2">{t('booking')}</Typography>
                <Typography variant="p">{t('bookingContent')}</Typography>
                <h3 className={twJoin([concertTextStyles, 'mt-10'])}>{t('orchestraConcerts')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('chamberMusicConcerts')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('soloPerformances')}</h3>
                <h3 className={twJoin([concertTextStyles])}>{t('weddingsAndSpecialEvents')}</h3>
            </section>
            <section className={twJoin(['min-h-dvh px-6 sm:px-8 md:px-4 h-full max-w-[1920px] lg:px-8 xl:px-34  flex items-center justify-center gap-12'])}>
                <div ref={ref} className="flex h-fit w-fit flex-col items-center justify-center gap-8 overflow-hidden md:flex-row">
                    <div className={twJoin(['w-[60%] bg-none h-[1500%] md:bg-black flex justify-center items-center p-12'])} style={{ height: boundingRect ? boundingRect.height : '100%' }}>
                        <Typography className={twJoin(['text-center text-black md:text-white'])} variant="h2">{t('biography')}</Typography>
                    </div>
                    <Typography className="w-[40%]" align="justify" variant="p">{t('biographyContent')}</Typography>
                </div>
            </section>
        </PageLayout >
    );
};

export default Violinist;
