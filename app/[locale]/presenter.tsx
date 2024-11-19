'use client';
import { twJoin } from 'tailwind-merge';
import LocationIcon from '../components/icons/LocationIcon';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import WavyCircle from '../components/transitionLink/WavyCircle';
import { useState } from 'react';
import Image from 'next/image';

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

const Presenter = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const t = useTranslations('Index');

    return (
        <div className="flex h-[100vh] w-[100vw] flex-col justify-stretch overflow-hidden bg-white bg-cover bg-no-repeat pb-5">
            {!isLoaded && <AnimatePresence>
                <motion.div
                    initial={{ scale: '0%' }}
                    animate={{ scale: '100%' }}
                    exit={{ scale: '10000%' }}
                    transition={{ duration: 1 }}
                    className="absolute z-[10000] flex h-[100vh] w-[100vw] items-center justify-center"
                >
                    <WavyCircle waves1={3} waves2={4} />
                </motion.div>
            </AnimatePresence>
            }
            <motion.div
                className={twJoin(['absolute h-[100%] w-full overflow-hidden bg-cover bg-no-repeat'])}
                initial={{ opacity: 0, scale: '100%' }}
                animate={{ opacity: 1, scale: '100%' }}
                transition={{ delay: 0, duration: 1.5, }}
            >
                <Image
                    src={'/coverPhotoHome.jpg'}
                    layout="fill"
                    objectFit="cover"
                    alt="background image"
                    onLoadingComplete={() => setIsLoaded(true)}
                />
            </motion.div>
            <div className="relative z-50 flex h-full w-full flex-col justify-between">
                <div className="relativebg-white"></div>
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
            <motion.div initial={{ opacity: 0, scale: '100%' }}
                animate={{ opacity: 1, scale: '100%' }}
                transition={{ delay: 0, duration: 2, }} className="absolute z-10 h-[100vh] w-full bg-black-trans" />

        </div >
    );
};

export default Presenter;