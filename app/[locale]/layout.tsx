import type { Metadata } from 'next';
import { Nanum_Myeongjo, Zen_Old_Mincho, Francois_One, Tilt_Warp, League_Spartan, Reem_Kufi, Bakbak_One, Gabarito, Urbanist, Noto_Sans_Display, Merriweather_Sans, Catamaran, Sarabun, Lexend_Deca, Hind_Madurai, Readex_Pro } from 'next/font/google';
import '../globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Analytics } from '@vercel/analytics/react';
import SubLayout from './subLayout';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { AnimatePresence } from 'framer-motion';

const nanum = Nanum_Myeongjo({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const zenOldMincho = Zen_Old_Mincho({
	weight: ['400', '600', '900'],
	subsets: ['latin']
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
const reem = Reem_Kufi({
	weight: ['400', '500', '700', '600'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Tokyo Violinist | Michael Shingo ',
	description:
		'Michael Shingo Crawford, a violinist, composer, and arranger in Tokyo. Specializing in classical and anime music.',
	metadataBase: new URL('https://michaelshingo.com/'),
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string; }; }) {
	const messages = await getMessages();

	return (
		<html lang={locale} className={`overflow-x-hidden bg-white ${spartan.variable} ${francois.variable}`}>
			<body className={locale === 'en' ? francois.className : zenOldMincho.className}>
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
