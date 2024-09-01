'use client';
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import Quote from '../../components/text/Quote';
import GreenText from '../../components/text/GreenText';
import Typography, { TypographyVariant } from '../../components/text/Typography';
import Divider, { DividerVariant } from '../../components/divider/Divider';
import TrebleIcon from '../../components/icons/TrebleClef';
import BassIcon from '../../components/icons/BassClef';
import LanguageToggle from '../../components/language/languageToggle';


const Home = () => {

    return (
        <>
            <div className="z-0 flex h-[100vh] w-[100vw] -translate-y-[0px] flex-col justify-stretch overflow-hidden bg-[url('/alexTranProposal3.jpg')] bg-cover bg-no-repeat pb-5">
                <div className="absolute z-0 h-full w-full bg-black-trans"></div>
            </div>
            <LanguageToggle />

            <div className="mx-28 my-12 flex flex-col items-center gap-5">


                <h1 className="self-start text-[10rem] uppercase text-black">Violin</h1>
                <div className="h-fit w-[50%] max-w-[750px]">
                    <Quote>
                        <GreenText>Michael Shingo Crawford</GreenText> is a Tokyo-based violinist, performing classical music, contemporary music, and anime soundtracks.
                    </Quote>
                    <Typography variant={TypographyVariant.H2}>Orchestra</Typography>
                    <Typography variant={TypographyVariant.P}>Other engagements include performances with the Philadelphia Virtuosi, Haverford Chorale Orchestra, LaGrange Symphony,  as well as the <GreenText>World Congress for Information Technology Orchestra</GreenText> in Yerevan, Armenia.  While pursuing his studies, he served as concertmaster and principal second violin of the Emory University Symphony Orchestra and was the winner of its 2015-2016 Concerto and Aria Competition with his performance of the Barber Violin Concerto. Over the summers, he has attended the Dalí Quartet International Music Festival, Eastern Music Festival, and the National Symphony Orchestra Summer Music Institute.</Typography>
                    <Divider variant={DividerVariant.Small} icon={TrebleIcon} />
                    <Typography variant={TypographyVariant.H2}>Chamber Music</Typography>
                    <Typography variant={TypographyVariant.P}>He has performed with ENAensemble and Alter Ego Chamber Opera, both opera companies that bring fresh takes on the operatic medium. Performed at Groupmuses throughout Philadelphia, Washington D.C., and New York City. Philadelphia Ethical Society.</Typography>
                    <Divider variant={DividerVariant.Small} icon={TrebleIcon} />
                    <Typography variant={TypographyVariant.H2}>Solo</Typography>
                    <Typography variant={TypographyVariant.P}>
                        Through his freelancing business, Michael has performed at events and concerts throughout the United States and the Netherlands, as well as in China and Belgium.  was the winner of its 2015-2016 Concerto and Aria Competition with his performance of the Barber Violin Concerto. While living in the United States, he taught violin and piano lessons in his private studio, which attracted online students from several countries, including Australia and Singapore.

                        Michael is passionate about recording his compositions and arrangements of anime music, sharing them on his Youtube channel which has garnered over two million views. He merges the worlds of traditional and contemporary classical music with anime music by creating arrangements that utilize the full palette of violin technique. His compositional training inspires unique takes on well-known soundtracks, to which he adds his personal flair.
                    </Typography>
                    <Divider variant={DividerVariant.Large} icon={BassIcon} />

                </div>
                <div className="h-[300px] w-full"></div>
            </div >


        </>
    )

};

export default Home;
