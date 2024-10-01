'use client';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import VideoSection, { VideoData } from '@/app/components/video/VideoSection';
import HorizontallyScrollingCards from '@/app/components/horizontallyScrollingCards/HorizontallyScrollingCards';
import { twJoin } from 'tailwind-merge';
import Typography from '@/app/components/text/Typography';

const violinVideos: VideoData[] = [
    {
        label: 'New Music',
        link: 'https://www.youtube.com/embed/n-EoZHulANI?si=pa5uukL1qCPBrmim',
    },
    {
        label: 'Classical',
        link: 'https://www.youtube.com/embed/FR6tKvGvZOc?si=ct_goRQS_SuJ99c9',
        isDefault: true
    },
    {
        label: 'Anime Music',
        link: 'https://www.youtube.com/embed/bdCaycB7pyk?si=aUhjiYB_iB0aF3et',
    }
];

const concertTextStyles = 'text-5xl text-center border-[2px] border-black w-[110%] last-of-type:border-b-[4px] first-of-type:border-t-[4px] p-10 hover:bg-secondary transition duration-500 hover:text-white';

const Violinist = () => {
    return (
        <PageLayout title="Violin" backgroundImageUrl="/alexTranProposal3.jpg">
            <Quote>
                <GreenText>Michael Shingo Crawford</GreenText> is a Tokyo-based violinist, performing classical music, contemporary music, and anime soundtracks.
            </Quote>
            <HorizontallyScrollingCards />
            <VideoSection data={violinVideos} />
            {/* <div className="flex h-fit min-h-[100vh] w-full flex-col items-center justify-center gap-0 bg-primary">
                <h2 className="p-10 text-9xl">Booking</h2>
                <Typography variant="p">Michael is available to perform as a violinist at the following events:</Typography>
                <h3 className={twJoin([concertTextStyles, 'mt-10'])}>Orchestra Concerts</h3>
                <h3 className={twJoin([concertTextStyles])}>Chamber Music Concerts</h3>
                <h3 className={twJoin([concertTextStyles])}>Solo Performances</h3>
                <h3 className={twJoin([concertTextStyles])}>Weddings and Special Events</h3>
            </div> */}
        </PageLayout >
    );
};

export default Violinist;
