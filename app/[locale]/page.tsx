'use client';
import LocationIcon from '../components/icons/LocationIcon';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const locationVariants = {
	hidden: {
		opacity: 0,
		translateX: '20px'
	},
	visible: {
		opacity: 1,
		translateX: '0px',
		transition: {
			delay: 0,
			duration: 0.1,
			type: 'spring',
			stiffness: 200,
			damping: 10,
			mass: 1,
		}
	},
};
export default function Home() {
	const t = useTranslations('Index');
	const locale = useLocale();


	return (
		<div className="flex h-[100vh] w-[100vw] flex-col justify-stretch overflow-hidden bg-[url('/coverPhotoHome.jpg')] bg-cover bg-no-repeat pb-5">
			<div className="relative z-50 flex h-full w-full flex-col justify-between">
				<div className="relative"></div>
				<div className="flex flex-col gap-12 sm:gap-10 md:gap-6">
					<h1 className="relative z-50 w-full self-center text-center text-5xl uppercase text-white sm:text-6xl md:text-7xl">{t('title')}</h1>
					<h1 className="relative z-50 w-full self-center text-center text-xl uppercase text-white md:text-4xl">{t('role')}</h1>
				</div>
				<div className="flex w-full flex-row justify-center">
					<div className="flex w-fit flex-row">
						<div className="mr-1 h-7 w-7 md:mr-3">
							<LocationIcon size="120%" pathClassName='scale-[70%] fill-transparent stroke-white sm:scale-[80%] md:scale-100' />
						</div>
						<motion.h1 variants={locationVariants} initial="hidden" animate="visible" className="relative z-50 w-full self-center text-center text-xl text-white sm:text-2xl md:text-3xl">{t('location')}</motion.h1>
					</div>
				</div>
			</div>
			<div className="absolute z-10 h-[100vh] w-full bg-black-trans">
			</div>

		</div>
	);
}
