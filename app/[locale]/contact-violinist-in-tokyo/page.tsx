'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import Quote from '@/app/components/text/Quote';
import GreenText from '@/app/components/text/GreenText';
import { twJoin } from 'tailwind-merge';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('Contact');

    return (
        <PageLayout title={t('title')} backgroundImageUrl="/norwaySeagull.jpg">
            <div className={twJoin(['h-fit min-h-[130vh] w-full'])}>
                <Quote>{t('quote')}</Quote>
                <ContactForm />
            </div>
        </PageLayout >
    );
};

export default Contact;
