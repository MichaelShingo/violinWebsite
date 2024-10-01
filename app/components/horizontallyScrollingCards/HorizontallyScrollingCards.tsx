'use client';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Card, { PerformanceCard } from '@/app/components/card/Card';
import { twJoin } from 'tailwind-merge';
import { useRef, useState } from 'react';
import Typography from '../text/Typography';
import { isMobile } from 'react-device-detect';
import { hideOnMobile, showOnMobile } from '@/app/constants/styleConstants';

const performanceHighlights: PerformanceCard[] = [
    {
        title: 'ENAensemble',
        ensembleType: 'Chamber',
        description: 'Newly composed chamber opera performances in Philadelphia.',
        period: '2019-2022',
    },
    {
        title: 'Alto Ego Chamber Opera',
        ensembleType: 'Chamber',
        description: 'Performed in Alcina REVAMPED as part of the Philadelphia Fringe Festival. Handel\'s opera reimagined in a modern context and fitted with electronics, saxophone, and guitar.',
        period: '2019-2022',
    },
    {
        title: 'WCIT Orchestra',
        ensembleType: 'Orchestra',
        description: 'Invited to perform with the World Conference for Information Technology Orchestra in Yerevan, Areenia.',
        period: '2019',
    },
    {
        title: 'Philadelphia Virtuosi',
        ensembleType: 'Orchestra',
        description: '',
        period: '2022',
    },
    {
        title: 'International Events',
        ensembleType: 'Solo',
        description: 'Performed events throughout the United States, the Netherlands, Belgium, and China.',
        period: '2019-2023',
    },
    {
        title: 'ENAensemble',
        ensembleType: 'Chamber',
        description: 'Newly composed Chamber opera performances in Philadelphia.',
        period: '2019-2022',
    },
    {
        title: 'ENAensemble',
        ensembleType: 'Chamber',
        description: 'Newly composed Chamber opera performances in Philadelphia.',
        period: '2019-2022',
    },
    {
        title: 'ENAensemble',
        ensembleType: 'Chamber',
        description: 'Newly composed Chamber opera performances in Philadelphia.',
        period: '2019-2022',
    },
    {
        title: 'Emory University Symphony',
        ensembleType: 'Orchestra',
        description: 'Concertmaster, principal second violin, winner of 2015 Concerto and Aria Competition with the Barber Violin Concerto.',
        period: '2013-2017',
    },
];

const HorizontallyScrollingCards = () => {
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


    return (
        <>
            <section ref={scrollContainerRef} className={twJoin([
                'hidden lg:block h-[400vh] -z-50 transition duration-700',
            ])}>
                <motion.h2 style={{ x: xBackgroundText }} className={twJoin([
                    'sticky left-0 -z-[0] top-0 mt-auto flex h-dvh items-center text-center text-[50rem] leading-[40rem] uppercase',
                    areCardsVisible ? 'text-black' : 'text-black',
                ])}>
                    Performance Highlights
                </motion.h2>
                <motion.div style={{ x }} className="min-w-dvw fixed left-0 top-0 flex h-dvh flex-row items-center justify-center">
                    {performanceHighlights.map((item) => (
                        <Card card={item} />
                    ))}

                </motion.div>
            </section>
            <section className={twJoin(['block lg:hidden'])}>
                <Typography className="text-center" variant="h2">Performance Highlights</Typography>
                {performanceHighlights.map((item) => (
                    <Card card={item} />
                ))}

            </section>

        </>
    );
};

export default HorizontallyScrollingCards;