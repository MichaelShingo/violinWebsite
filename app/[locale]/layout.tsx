import type { Metadata } from 'next';
import { Nanum_Myeongjo, Zen_Old_Mincho } from 'next/font/google';
import '../globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Analytics } from '@vercel/analytics/react';
import SubLayout from './subLayout';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const nanum = Nanum_Myeongjo({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const zenOldMincho = Zen_Old_Mincho({
	weight: "400",
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Michael Shingo | Violinist in Tokyo',
	description:
		'Michael Shingo Crawford, a violinist, composer, and arranger in Tokyo. Specializing in classical and anime music.',
	metadataBase: new URL('https://michaelshingo.com/'),
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string; }; }) {
	const messages = await getMessages();

	return (
		<html lang={locale} className="overflow-x-hidden bg-white">
			<body className={locale === 'en' ? nanum.className : zenOldMincho.className}>
				<NextIntlClientProvider messages={messages}>
					<ReduxProvider><SubLayout>{children}</SubLayout></ReduxProvider>
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
