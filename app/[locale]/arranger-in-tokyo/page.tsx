import { Metadata } from 'next';
import Presenter from './presenter';
import { websiteTitle } from '@/app/constants/metadata';

export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Arranging.pageTitle + websiteTitle,
        description: translations.Arranging.pageDescription
    };
}

const Arranging = () => {
    return (
        <Presenter />
    );
};

export default Arranging;
