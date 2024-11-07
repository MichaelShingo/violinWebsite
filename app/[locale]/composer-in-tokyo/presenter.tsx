'use client';
import Typography from '../../components/text/Typography';
import PageLayout from '@/app/components/pageLayout/PageLayout';
import Quote from '@/app/components/text/Quote';
import GreenText from '@/app/components/text/GreenText';
import { compositions } from '@/app/constants/compositions';
import CompositionsTable from './CompositionTable';
type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    source: string;
    message: string;
};


const Presenter = () => {

    return (<PageLayout title="Composition" backgroundImageUrl="/freshIncPiano.jpg">
        <div className="h-fit min-h-[130vh] w-full px-28">
            <CompositionsTable compositions={compositions} />

        </div>
    </PageLayout >);
};

export default Presenter;