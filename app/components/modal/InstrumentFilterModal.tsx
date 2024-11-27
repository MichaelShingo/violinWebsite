'use client';
import Typography from "../text/Typography";
import { twJoin } from "tailwind-merge";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setSelectedInstruments } from "@/redux/features/locationSlice";
import useCompositions from "@/app/customHooks/useCompositions";
import { useTranslations } from "next-intl";

const InstrumentFilterModal = () => {
    const selectedInstruments = useAppSelector((state) => state.locationReducer.value.selectedInstruments);
    const t = useTranslations('Composition');
    const dispatch = useDispatch();
    const { instruments: instrumentsMap } = useCompositions();

    const instruments = Object.values(instrumentsMap);

    const handleInstrumentClick = (instrument: string) => {
        if (selectedInstruments.includes(instrument)) {
            dispatch(setSelectedInstruments(selectedInstruments.filter(selectedInstrument => selectedInstrument !== instrument)));
        } else {
            dispatch(setSelectedInstruments([...selectedInstruments, instrument]));
        }
    };
    return (
        <div className="mx-auto h-fit w-fit max-w-full bg-white px-3 py-10 md:max-w-[60%] md:px-10">
            <Typography variant="h3">{t('selectInstruments')}</Typography>
            <div className="flex flex-row flex-wrap">
                {instruments.sort().map((instrument, index) => (
                    <button key={index} className={twJoin([
                        'm-1 h-fit w-fit rounded-sm transition border-[2px] px-3 md:px-5 text-xl',
                        selectedInstruments.includes(instrument) ? 'bg-black border-black' : 'bg-white border-black'
                    ])}
                        onClick={() => handleInstrumentClick(instrument)}
                    >
                        <Typography variant="p" color={selectedInstruments.includes(instrument) ? 'text-white' : 'text-black'}>{instrument}</Typography>
                    </button>
                ))}
            </div>
        </div >
    );
};

export default InstrumentFilterModal;