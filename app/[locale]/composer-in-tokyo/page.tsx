'use client';
import Typography from '../../components/text/Typography';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import Quote from '@/app/components/text/Quote';
import GreenText from '@/app/components/text/GreenText';

const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
};


type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    source: string;
    message: string;
};

const Composition = () => {
    return (
        <PageLayout title="Composition" backgroundImageUrl="/freshIncPiano.jpg">
            <div className="h-fit min-h-[130vh] w-full px-28">
                <Quote>Arrangements that utilize the <GreenText>full palette</GreenText> of violin technique.</Quote>
                <Typography variant="h2">Send me a message</Typography>
                <Typography variant="p">I am available to perform as a violinist in Tokyo, other cities in Japan, as well as abroad. I am always happy to meet new people! If you just want to say hello, feel free to reach out.</Typography>

            </div>
        </PageLayout >
    );
};

export default Composition;
