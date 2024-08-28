import type { Metadata } from 'next';
import { Nanum_Myeongjo } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/redux/provider';
import { Analytics } from '@vercel/analytics/react';
import SubLayout from './components/subLayout';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="overflow-x-hidden bg-white">

			<body className={`${nanum.className}`}>
				<ReduxProvider><SubLayout>{children}</SubLayout></ReduxProvider>
				<Analytics />
			</body>
		</html>
	);
}
