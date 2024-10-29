import { MetadataRoute } from 'next';
import { urls } from './constants/urls';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const calcPriority = (url: string) => {
		if (url === urls.home || url === urls.violinist) {
			return 1;
		} else {
			return 0.8;
		}
	};
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const fullUrls = Object.values(urls).map(path => {
		return {
			url: `${baseUrl}${path}`,
			lastModified: new Date(),
			priority: calcPriority(path)
		};
	});

	return [
		...fullUrls
	];
}
