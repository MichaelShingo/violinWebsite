import Presenter from './presenter';
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
	const locale = params.locale;
	const translations = await import(`../../messages/${locale}.json`);

	return {
		title: translations.Home.title,
		description: translations.Home.description
	};
}

export default function Home() {
	return (
		<Presenter />
	);
}
