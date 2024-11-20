'use client';
import PageLayout from '@/app/components/pageLayout/PageLayout';
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
import { formatTranslation } from '@/app/utils/formatTranslation';
import useCompositions from '@/app/customHooks/useCompositions';

type FormValues = {
    term: string;
    instruments: string[];
};

const Presenter = () => {
    const t = useTranslations('Composition');
    const { compositions } = useCompositions();
    const [filteredCompositions, setFilteredCompositions] = useState(compositions.sort((a, b) => a.title.localeCompare(b.title)));
    const selectedInstruments = useAppSelector((state) => state.locationReducer.value.selectedInstruments);
    const dispatch = useDispatch();
    const form = useForm<FormValues>();
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
        <PageLayout title={t('pageTitle')} backgroundImageUrl="/freshIncPiano.jpg">
            <BioSection title={t('biographyTitle')} content={formatTranslation(t('biography'))} />
            <div className="h-fit min-h-[130vh] w-full px-1 md:px-28">
                <Typography variant="h2" align='left'>{t('works')}</Typography>
                <div className="justify-left mb-2 flex flex-col items-center gap-2 md:mb-10 md:flex-row md:gap-10">
                    <TextInput
                        placeholder={t('search')}
                        type="text"
                        id="term"
                        inputName="term"
                        register={register}
                        useErrors={false}
                        classNames="w-full"
                    />
                    <Button variant="secondary" size="small" onClick={handleFilterClick}>{t('filterByInstruments')} ({selectedInstruments.length})</Button>
                    <Typography variant="h4">
                        {filteredCompositions.length} {t('piecesDisplayed')}
                    </Typography>
                </div>
                {filteredCompositions.length > 0 ?
                    <CompositionsTable compositions={filteredCompositions} />
                    :
                    <Typography variant="h4" align="center">{t('noCompositions')}</Typography>}
            </div>
        </PageLayout >);
};

export default Presenter;