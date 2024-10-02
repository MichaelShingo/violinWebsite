'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import Quote from '@/app/components/text/Quote';
import GreenText from '@/app/components/text/GreenText';
import { twJoin } from 'tailwind-merge';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <PageLayout title="Contact" backgroundImageUrl="/norwaySeagull.jpg">
            <div className={twJoin(['h-fit min-h-[130vh] w-full'])}>
                <Quote>Contact me about violin <GreenText>performance</GreenText> opportunities, music <GreenText>composition</GreenText> and <GreenText>arrangement</GreenText> commissions, or anything else that is on your mind!</Quote>
                <ContactForm />
            </div>
        </PageLayout >
    );
};

export default Contact;
