'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import { compositions } from '@/app/constants/compositions';
import CompositionsTable from './CompositionTable';
import BioSection from '@/app/components/BioSection/BioSection';
import TextInput from '@/app/components/form/TextInput';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import Typography from '@/app/components/text/Typography';
import Button from '@/app/components/Button/Button';
import { setIsModalOpen, setModalContent } from '@/redux/features/locationSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';

type FormValues = {
    term: string;
    instruments: string[];
};

const Presenter = () => {
    const [filteredCompositions, setFilteredCompositions] = useState(compositions.sort((a, b) => a.title.localeCompare(b.title)));
    const selectedInstruments = useAppSelector((state) => state.locationReducer.value.selectedInstruments);
    const dispatch = useDispatch();


    const form = useForm<FormValues>();
    const t = useTranslations('Contact');
    const { register, getValues, watch } = form;


    useEffect(() => {
        setFilteredCompositions(compositions.filter(composition => {
            const ensembles = composition.ensemble.join(' ');
            const searchTerms = `${composition.title.toLowerCase()} ${ensembles.toLowerCase()} |${composition.description.toLowerCase()}`;

            return (
                searchTerms.includes(getValues('term').toLowerCase())
                && selectedInstruments.every(instrument => composition.ensemble.includes(instrument))
            );

        }));
    }, [watch('term'), selectedInstruments]);

    const handleFilterClick = () => {
        dispatch(setModalContent('instrument'));
        dispatch(setIsModalOpen(true));
    };

    return (
        <PageLayout title="Composition" backgroundImageUrl="/freshIncPiano.jpg">
            <BioSection title="Biography" content="Michael Shingo Crawford is a Tokyo-based violinist, composer, and arranger passionate about performing and recording classical music, contemporary music, and anime sountracks. As a composer, his work tackles quirky subject matter with a tinge of the supernatural, often drawing inspiration from his Japanese heritage. Michael’s compositions have been presented by performers including the Network for New Music, PRISM Quartet, Sound Energy Trio, Philadelphia Orchestra Musicians, and the Vega String Quartet. As a violinist, Michael is passionate about recording his compositions and arrangements, sharing them on his Youtube channel which has garnered over 2 million views. Michael’s engagements include performances with orchestras such as the Philadelphia Virtuosi, World Congress for Information Technology Orchestra in Yerevan, Armenia, and chamber opera companies including ENAensemble and Alter Ego Chamber Opera. Michael holds a Masters in Music Composition from Temple University and a Bachelors in Violin Performance from Emory University. " />
            <div className="h-fit min-h-[130vh] w-full px-28">
                <Typography variant="h2" align='left'>Works</Typography>
                <div className="justify-left mb-10 flex flex-row items-center gap-10">
                    <TextInput
                        placeholder="Search"
                        type="text"
                        id="term"
                        inputName="term"
                        register={register}
                        useErrors={false}
                        classNames="w-2/3"
                    />
                    <Button variant="secondary" size="small" onClick={handleFilterClick}>Filter by Instruments ({selectedInstruments.length})</Button>
                    <Typography variant="h4">
                        Displaying {filteredCompositions.length} pieces.
                    </Typography>
                </div>
                {filteredCompositions.length > 0 ?
                    <CompositionsTable compositions={filteredCompositions} />
                    :
                    <Typography variant="h4" align="center">There were no compositions that match the search term.</Typography>}
            </div>
        </PageLayout >);
};

export default Presenter;