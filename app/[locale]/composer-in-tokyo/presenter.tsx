'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { compositions } from '@/app/constants/compositions';
import CompositionsTable from './CompositionTable';
import BioSection from '@/app/components/BioSection/BioSection';
type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    source: string;
    message: string;
};


const Presenter = () => {
    return (
        <PageLayout title="Composition" backgroundImageUrl="/freshIncPiano.jpg">
            <BioSection title="Biography" content="Michael Shingo Crawford is a Tokyo-based violinist, composer, and arranger passionate about performing and recording classical music, contemporary music, and anime sountracks. As a composer, his work tackles quirky subject matter with a tinge of the supernatural, often drawing inspiration from his Japanese heritage. Michael’s compositions have been presented by performers including the Network for New Music, PRISM Quartet, Sound Energy Trio, Philadelphia Orchestra Musicians, and the Vega String Quartet. As a violinist, Michael is passionate about recording his compositions and arrangements, sharing them on his Youtube channel which has garnered over 2 million views. Michael’s engagements include performances with orchestras such as the Philadelphia Virtuosi, World Congress for Information Technology Orchestra in Yerevan, Armenia, and chamber opera companies including ENAensemble and Alter Ego Chamber Opera. Michael holds a Masters in Music Composition from Temple University and a Bachelors in Violin Performance from Emory University. " />
            <div className="h-fit min-h-[130vh] w-full px-28">
                <CompositionsTable compositions={compositions} />
            </div>
        </PageLayout >);
};

export default Presenter;