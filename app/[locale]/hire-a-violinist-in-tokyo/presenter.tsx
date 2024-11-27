'use client';

import ImageSection from "@/app/components/ImageSection/ImageSection";
import PageLayout from "@/app/components/pageLayout/PageLayout";
import PlainTextSection from "@/app/components/PlainTextSection/PlainTextSection";
import Tabs, { Tab } from "@/app/components/Tabs/Tabs";
import Quote from "@/app/components/text/Quote";
import { formatTranslation } from "@/app/utils/formatTranslation";
import { useTranslations } from "next-intl";

const Presenter = () => {
    const t = useTranslations('Weddings');

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
            bgImageUrl: '/harpAndViolinSolo.jpg',
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
            bgImageUrl: '/harpAndViolin.jpg',
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
            {/* <Quote source="Brooke R.">
                {formatTranslation(t('quote'))}
            </Quote> */}
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
                {formatTranslation(t('receiveQuoteParagraph'))}
            </PlainTextSection>

        </PageLayout >
    );
};

export default Presenter;