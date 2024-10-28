'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import Quote from '@/app/components/text/Quote';
import { twJoin } from 'tailwind-merge';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';
import { formatTranslation } from '@/app/utils/formatTranslation';

const Presenter = () => {
    const t = useTranslations('Contact');

    return (<PageLayout title={t('title')} backgroundImageUrl="/norwaySeagull.jpg">
        <div className={twJoin(['h-fit min-h-[130vh] w-full'])}>
            <Quote>{formatTranslation(t('quote'))}</Quote>
            <ContactForm />
        </div>
    </PageLayout >);
};

export default Presenter;