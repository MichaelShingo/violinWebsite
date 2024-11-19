import { Metadata } from 'next';
import Presenter from './presenter';
import { websiteTitle } from '@/app/constants/metadata';

export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Weddings.title + websiteTitle,
        description: translations.Weddings.description
    };
}

const Violinist = () => {
    return (
        <Presenter />
    );
};

export default Violinist;
