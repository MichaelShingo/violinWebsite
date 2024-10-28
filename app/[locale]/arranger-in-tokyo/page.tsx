import { Metadata } from 'next';
import Presenter from './presenter';

export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Arranging.pageTitle,
        description: translations.Arranging.pageDescription
    };
}

const Arranging = () => {
    return (
        <Presenter />
    );
};

export default Arranging;
