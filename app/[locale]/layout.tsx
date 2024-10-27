import type { Metadata } from 'next';
import { Nanum_Myeongjo, Zen_Old_Mincho, League_Spartan, Readex_Pro, Zen_Antique_Soft, Noto_Sans_JP } from 'next/font/google';
import '../globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Analytics } from '@vercel/analytics/react';
import SubLayout from './subLayout';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const zenAntique = Zen_Antique_Soft({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const zenOldMincho = Zen_Old_Mincho({
	weight: ['400', '600', '900'],
	subsets: ['latin'],
	variable: '--font-zen'
});
const notoSansJapanese = Noto_Sans_JP({
	weight: ['400', '600', '900'],
	subsets: ['latin'],
	variable: '--font-noto'
});

const francois = Readex_Pro({
	weight: ['700'],
	subsets: ['latin'],
	variable: '--font-francois'

});

const spartan = League_Spartan({
	weight: ['100', '300', '500', '700', '900'],
	subsets: ['latin'],
	variable: '--font-spartan'

});

// export const metadata: Metadata = {
// 	title: {
// 		default: 'Tokyo Violinist | Michael Shingo Crawford',
// 		template: '%s - Michael Shingo Crawford',
// 	},
// 	description:
// 		'Michael Shingo Crawford, a violinist, composer, and arranger in Tokyo, Japan. Specializing in classical and anime music.',
// 	twitter: {
// 		card: 'summary_large_image'
// 	},
// 	metadataBase: new URL('https://michaelshingo.com/'),
// };

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string; }; }) {
	const messages = await getMessages();

	return (
		<html lang={locale} className={`overflow-x-hidden bg-white ${spartan.variable} ${francois.variable} ${zenOldMincho.variable} ${notoSansJapanese.variable}`}>
			<body className={locale === 'en' ? francois.className : zenAntique.className}>
				<NextIntlClientProvider messages={messages}>
					<ReduxProvider>
						<SubLayout>
							{children}
						</SubLayout>
					</ReduxProvider>
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
