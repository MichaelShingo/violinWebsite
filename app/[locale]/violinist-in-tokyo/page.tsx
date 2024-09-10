'use client';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import Typography from '../../components/text/Typography';
import Divider, { DividerVariant } from '../../components/divider/Divider';
import TrebleIcon from '../../components/icons/TrebleClefIcon';
import PageLayout from '@/app/components/pageLayout/PageLayout';

const Home = () => {
    return (
        <PageLayout title="Violin">
            <Quote>
                <GreenText>Michael Shingo Crawford</GreenText> is a Tokyo-based violinist, performing classical music, contemporary music, and anime soundtracks.
            </Quote>
            <Typography variant="h2">Orchestra</Typography>
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
        </PageLayout>
    );
};

export default Home;
