import { Metadata } from 'next';
import Presenter from './presenter';

export async function generateMetadata({ params }): Promise<Metadata> {
	const locale = params.locale;
	const translations = await import(`../../../messages/${locale}.json`);

	return {
		title: translations.HireMusicians.metadataTitle,
		description: translations.HireMusicians.pageDescription,
		keywords: [
			'hire musicians in Japan',
			'musicians in Tokyo',
			'wedding musician in Tokyo',
			'live music Japan',
			'hire a violinist Tokyo',
			'Tokyo event musicians',
			'bilingual musician Japan',
			'custom song arrangements',
		],
	};
}

const HireMusiciansPage = () => {
	return <Presenter />;
};

export default HireMusiciansPage;
