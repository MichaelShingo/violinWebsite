'use client';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Card, { PerformanceCard } from '@/app/components/card/Card';
import { twJoin } from 'tailwind-merge';
import { useRef, useState } from 'react';
import Typography from '../text/Typography';
import { useTranslations } from 'next-intl';




const HorizontallyScrollingCards = () => {
    const t = useTranslations('Violin');
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });
    const x = useTransform(scrollYProgress, [0, 1], ['40%', "-100%"]);
    const xBackgroundText = useTransform(scrollYProgress, [0, 1], ['0%', "-230%"]);
    const [areCardsVisible, setAreCardsVisible] = useState<boolean>(false);
    const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [isInBackgroundText, setIsInBackgroundText] = useState<boolean>(false);

    useMotionValueEvent(percentage, "change", (value) => {
        setAreCardsVisible(value > 5 && value < 95);
    });
    useMotionValueEvent(percentage, "change", (value) => {
        setIsInBackgroundText(value > 1 && value < 99);
    });


    const performanceHighlights: PerformanceCard[] = [
        {
            title: 'Tokyo Vivaldi Ensemble',
            ensembleType: t('orchestra'),
            description: t('vivaldiDescription'),
            period: '2024-2025',
            link: 'https://vivaldi.jp/',
        },
        {
            title: 'ENAensemble',
            ensembleType: t('chamber'),
            description: t('enaDescription'),
            period: '2019-2022',
            link: 'https://www.enaensemble.org/',
        },
        {
            title: 'Alter Ego Chamber Opera',
            ensembleType: t('chamber'),
            description: t('alterEgoDescription'),
            period: '2019-2022',
            link: 'https://www.alteregochamberopera.org/',
        },
        {
            title: 'WCIT Orchestra',
            ensembleType: t('orchestra'),
            description: t('wcitDescription'),
            period: '2019',
            link: 'https://www.classicfm.com/music-news/ai-concert-hosted-wcit-first-time-orchestra/',
        },
        {
            title: 'Philadelphia Virtuosi',
            ensembleType: t('orchestra'),
            description: t('virtuosiDescription'),
            period: '2022',
            link: 'https://www.pvco.org/',
        },
        {
            title: t('internationalEvents'),
            ensembleType: t('solo'),
            description: t('eventsDescription'),
            period: '2015-2023',
            link: 'https://www.gigsalad.com/michael_shingo_crawford_philadelphia',
        },
        {
            title: 'Emory University Symphony',
            ensembleType: t('orchestra'),
            description: t('emoryDescription'),
            period: '2013-2017',
            link: 'https://emorysymphony.org/',
        },
    ];


    return (
        <>
            <section ref={scrollContainerRef} className={twJoin([
                'hidden lg:block h-[400vh] -z-50 transition duration-700',
            ])}>
                <motion.h2 style={{ x: xBackgroundText }} className={twJoin([
                    'sticky left-0 -z-[0] top-0 mt-auto flex h-dvh items-center text-center text-[50rem] leading-[40rem] uppercase font-header',
                    areCardsVisible ? 'text-black' : 'text-black',
                ])}>
                    {t('performanceHighlights')}
                </motion.h2>
                <motion.div style={{ x }} className="min-w-dvw fixed left-0 top-0 flex h-dvh flex-row items-center justify-center">
                    {performanceHighlights.map((item) => (
                        <Card key={item.title} card={item} />
                    ))}
                </motion.div>
            </section>
            <section className={twJoin(['block lg:hidden'])}>
                <Typography className="text-center" variant="h2">{t('performanceHighlights')}</Typography>
                {performanceHighlights.map((item) => (
                    <Card key={item.title} card={item} />
                ))}

            </section>

        </>
    );
};

export default HorizontallyScrollingCards;