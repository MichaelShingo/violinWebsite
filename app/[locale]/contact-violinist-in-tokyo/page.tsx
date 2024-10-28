import { Metadata } from "next";
import Presenter from "./presenter";


export async function generateMetadata({ params }): Promise<Metadata> {
    const locale = params.locale;
    const translations = await import(`../../../messages/${locale}.json`);

    return {
        title: translations.Contact.pageTitle,
        description: translations.Contact.pageDescription
    };
}

const Contact = () => {
    return (
        <Presenter />
    );
};

export default Contact;
