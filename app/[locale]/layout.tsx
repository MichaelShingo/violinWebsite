import type { Metadata } from 'next';
import { Nanum_Myeongjo } from 'next/font/google';
import '../globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Analytics } from '@vercel/analytics/react';
import SubLayout from '../components/subLayout';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const nanum = Nanum_Myeongjo({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: 'Michael Shingo Crawford | Software Developer',
	description:
		'Michael Shingo Crawford, web developer and musician based in the Netherlands. Build with Next.js, React, Typescript.',
	metadataBase: new URL('https://portfolio.michaelshingo.com/'),
};



export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
	const messages = await getMessages();

	return (
		<html lang={locale} className="overflow-x-hidden bg-white">

			<body className={`${nanum.className}`}>
				<NextIntlClientProvider messages={messages}>

					<ReduxProvider><SubLayout>{children}</SubLayout></ReduxProvider>
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
