import { Metadata } from "next";
import Presenter from "./presenter";

export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Violin.pageTitle + ' | ' + translations.Index.title,
        description: translations.Violin.pageDescription
    };
}

const Violinist = () => {
    return (
        <Presenter />
    );
};

export default Violinist;
