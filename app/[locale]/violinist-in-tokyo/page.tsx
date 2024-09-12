'use client';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import Typography from '../../components/text/Typography';
import Divider, { DividerVariant } from '../../components/divider/Divider';
import TrebleIcon from '../../components/icons/TrebleClefIcon';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/app/components/card/Card';
import { twJoin } from 'tailwind-merge';

type Ensemble = 'Solo' | 'Chamber' | 'Orchestra';

export type PerformanceCard = {
    title: string;
    ensembleType: Ensemble;
    description?: string;
    period: string,
    image?: string;
};

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
        description: 'Invited to perform with the World Conference for Information Technology Orchestra in Yerevan, Aremenia.',
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

const Violinist = () => {
    const scrollContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollContainerRef });
    const x = useTransform(scrollYProgress, [0, 1], ['40%', "-100%"]);
    const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [areCardsVisible, setAreCardsVisible] = useState<boolean>(false);

    useMotionValueEvent(percentage, "change", (value) => {
        setAreCardsVisible(value > 5 && value < 95);
    });

    return (
        <PageLayout title="Violin">
            <Quote>
                <GreenText>Michael Shingo Crawford</GreenText> is a Tokyo-based violinist, performing classical music, contemporary music, and anime soundtracks.
            </Quote>
            <div ref={scrollContainerRef} className={twJoin(['h-[400vh] transition duration-700 overflow-x-hidden sm:overflow-x-visible', areCardsVisible ? 'bg-green-900' : 'bg-green-700'])}>
                <h2 className={twJoin(['sticky transition duration-700 left-0 top-0 mt-auto flex h-dvh items-center text-center text-[15rem] uppercase', areCardsVisible ? 'text-green-800' : 'text-green-300'])}>Performance Highlights</h2>
                <motion.div style={{ x }} className="min-w-dvw fixed left-0 top-0 flex h-dvh flex-row items-center justify-center">
                    {performanceHighlights.map((item) => (
                        <Card card={item} />
                    ))}

                </motion.div>
            </div>
            <div className="h-dvh" >
                <h2 className="text-center text-9xl uppercase text-green-1000">Media</h2>
            </div>
            <Typography variant="p">Other engagements include performances with the Philadelphia Virtuosi, Haverford Chorale Orchestra, LaGrange Symphony,  as well as the <GreenText>World Congress for Information Technology Orchestra</GreenText> in Yerevan, Armenia.  While pursuing his studies, he served as concertmaster and principal second violin of the Emory University Symphony Orchestra and was the winner of its 2015-2016 Concerto and Aria Competition with his performance of the Barber Violin Concerto. Over the summers, he has attended the Dalí Quartet International Music Festival, Eastern Music Festival, and the National Symphony Orchestra Summer Music Institute.</Typography>
            <Divider variant="small" icon={TrebleIcon} />
            <Typography variant="h2">Chamber Music</Typography>
            <Typography variant="p">He has performed with ENAensemble and Alter Ego Chamber Opera, both opera companies that bring fresh takes on the operatic medium. Performed at Groupmuses throughout Philadelphia, Washington D.C., and New York City. Philadelphia Ethical Society.</Typography>
            <Divider variant="small" icon={TrebleIcon} />
            <Typography variant="h2">Solo</Typography>
            <Typography variant="p">
                Through his freelancing business, Michael has performed at events and concerts throughout the United States and the Netherlands, as well as in China and Belgium.  was the winner of its 2015-2016 Concerto and Aria Competition with his performance of the Barber Violin Concerto. While living in the United States, he taught violin and piano lessons in his private studio, which attracted online students from several countries, including Australia and Singapore.

                Michael is passionate about recording his compositions and arrangements of anime music, sharing them on his Youtube channel which has garnered over two million views. He merges the worlds of traditional and contemporary classical music with anime music by creating arrangements that utilize the full palette of violin technique. His compositional training inspires unique takes on well-known soundtracks, to which he adds his personal flair.
            </Typography>
        </PageLayout >
    );
};

export default Violinist;
