import { Metadata } from "next";
import Presenter from "./presenter";

export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Composition.pageTitle + ' | ' + translations.Index.title,
        description: translations.Composition.pageDescription
    };
}

const Composition = () => {
    return (
        <Presenter />
    );
};

export default Composition;
