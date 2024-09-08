'use client';
import LocationIcon from '../components/icons/LocationIcon';
import { useTranslations } from 'next-intl';
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

	return (
		<div className="flex h-[100vh] w-[100vw] flex-col justify-stretch overflow-hidden bg-[url('/coverPhotoHome.jpg')] bg-cover bg-no-repeat pb-5">
			<div className="relative z-50 flex h-full w-full flex-col justify-between">
				<div className="relative"></div>
				<div className="flex flex-col gap-6">
					<h1 className="relative z-50 w-full self-center text-center text-7xl uppercase text-white">{t('title')}</h1>
					<h1 className="relative z-50 w-full self-center text-center text-4xl uppercase text-white">{t('role')}</h1>
				</div>
				<div className="flex w-full flex-row justify-center">
					<div className="flex w-fit flex-row">
						<div className="mr-3 h-7 w-7">
							<LocationIcon size="120%" pathClassName='fill-transparent stroke-white' />
						</div>
						<motion.h1 variants={locationVariants} initial="hidden" animate="visible" className="relative z-50 w-full self-center text-center text-3xl text-white">{t('location')}</motion.h1>
					</div>
				</div>
			</div>
			<div className="absolute z-10 h-full w-full bg-black-trans">
			</div>

		</div>
	);
}
