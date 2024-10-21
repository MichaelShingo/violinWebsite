'use client';
import Quote from '../../components/text/Quote';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { useAppSelector } from '@/redux/store';
import { formatTranslation } from '@/app/utils/formatTranslation';
import PlainTextSection from '@/app/components/PlainTextSection/PlainTextSection';
import ImageSection from '@/app/components/ImageSection/ImageSection';
import Tabs, { Tab } from '@/app/components/Tabs/Tabs';
import ImageWithLoader from './ImageWithLoader';

const concertTextStyles = 'text-xl md:text-5xl text-center border-[2px] border-black w-[110%] last-of-type:border-b-[4px] first-of-type:border-t-[4px] p-7 md:p-10 hover:bg-secondary transition duration-500 hover:text-white';

const Violinist = () => {
    const t = useTranslations('Weddings');
    const ref = useRef<HTMLDivElement>(null);
    const [boundingRect, setBoundingRect] = useState<DOMRect | null>(null);
    const windowHeight = useAppSelector(state => state.windowReducer.value.windowHeight);
    const windowWidth = useAppSelector(state => state.windowReducer.value.windowWidth);

    const tabs: Tab[] = [
        {
            title: t('soloViolin'),
            content: t('soloViolinDescription'),
            bgImageUrl: '/alexTranProposal1.jpg',
            videoUrl: 'https://www.youtube.com/embed/OfoqvqPQCaI?si=NxKHCx00gRPvIb-h'
        },
        {
            title: t('violinCello'),
            content: t('violinCelloDescription'),
            bgImageUrl: '/harpAndViolinSolo.png',
            videoUrl: ''
        },
        {
            title: t('violinPiano'),
            content: t('violinPianoDescription'),
            bgImageUrl: '/lanceRecital.jpg',
            videoUrl: 'https://www.youtube.com/embed/smSvZD7BCpg?si=h02L9hHRYLcAGv3i'
        },
        {
            title: t('violinGuitar'),
            content: t('violinGuitarDescription'),
            bgImageUrl: '/alexTranProposal3.jpg',
            videoUrl: 'https://www.youtube.com/embed/57dSarLsSwg?si=nfWjhSE9xA7kiIz3'
        },
        {
            title: t('violinHarp'),
            content: t('violinHarpDescription'),
            bgImageUrl: '/harpAndViolin.png',
            videoUrl: 'https://www.youtube.com/embed/dmoNcAsY17U?si=L9aUdut4WrtyeIOy'
        },
        {
            title: t('violinDuo'),
            content: t('violinDuoDescription'),
            bgImageUrl: '/alexTranProposal3.jpg',
            videoUrl: 'https://www.youtube.com/embed/dSt523L10iw?si=quOuZKWsYguEEs5J'
        },
        {
            title: t('stringTrio'),
            content: t('stringTrioDescription'),
            bgImageUrl: '/churchWedding3.jpg',
            videoUrl: null
        },
        {
            title: t('stringQuartet'),
            content: t('stringQuartetDescription'),
            bgImageUrl: '/parkerWedding.jpg',
            videoUrl: null
        }
    ];

    return (
        <PageLayout title={t('title')} backgroundImageUrl="/netherlandsViolin.jpg">
            <ImageWithLoader className="bg-red-500" src="/alexTranProposal2.jpg" alt={t('alexTranProposal2Alt')} />
            <Quote source="Brooke R.">
                {formatTranslation(t('quote'))}
            </Quote>
            <PlainTextSection title={t('intro')} paragraphs={[
                t('intro1'),
                t('intro2'),
                t('intro3')
            ]} />
            <ImageSection src="/cocktailHour.jpg" alt={t('cocktailHourAlt')} />
            <PlainTextSection title={t('ensembleOptions')} paragraphs={[
                t('ensembleOptionsParagraph')
            ]} />
            <Tabs tabs={tabs} />
            <PlainTextSection title={t('receiveQuote')}>
                {t('receiveQuoteParagraph')}
            </PlainTextSection>

        </PageLayout >
    );
};

export default Violinist;
