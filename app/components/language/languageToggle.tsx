'use client';
import React, { FC, useEffect, useRef } from "react";
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from "next-intl";
import { Locale } from "@/app/utils/types";
import WavyCircle from "../transitionLink/WavyCircle";

interface CharacterContainerProps {
    language: Locale;
}

let animationFrame: number = -1;

const CharacterContainer: FC<CharacterContainerProps> = ({ language }) => {
    const locale = useLocale();
    const ref: React.RefObject<HTMLDivElement> = useRef(null);
    const animationRef: React.RefObject<number> = useRef(0);
    const isActive = locale === language;
    const dimensions = isActive ? '30px' : '25px';

    // useEffect(() => {
    //     const animate = () => {
    //         const time = new Date().getTime() / 100;
    //         const sineValue = Math.sin(time);
    //         const cosValue = Math.cos(time);
    //         const amplitude = 1;
    //         const offset = 30;
    //         const positionX = offset * cosValue * amplitude
    //         const positionY = offset * sineValue * amplitude
    //         if (ref.current) {
    //             // console.log(position)
    //             ref.current.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
    //             animationFrame = requestAnimationFrame(animate);
    //         }
    //     };

    //     animationFrame = requestAnimationFrame(animate);
    //     return () => cancelAnimationFrame(animationFrame);
    // }, [])

    const handleClick = () => {
        animate();
    };

    const animate = () => {
        const duration = 1000;
        const startTime = performance.now();

        const step = () => {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const degrees = progress * 180;

            const cosValue = Math.cos(degrees);
            const sineValue = Math.sin(degrees);

            const amplitude = 1;
            const offset = 30;
            const positionX = offset * cosValue * amplitude;
            const positionY = offset * sineValue * amplitude;
            if (ref.current) {
                ref.current.style.transform = `translateX(${positionX}px) translateY(${positionY}px)`;
                // animationFrame = requestAnimationFrame(animate);
            }
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        // const degrees = new Date().getTime() / 100;
    };

    // animationFrame = requestAnimationFrame(animate);

    const calcPolarPosition = (degrees: number): number => {
        return Math.sin(degrees);
    };


    return (
        <button ref={ref} onClick={handleClick} className="absolute flex items-center justify-center rounded-lg text-2xl font-normal"
            style={{
                color: isActive ? 'white' : 'gray',
                backgroundColor: isActive ? 'green' : 'lightgray',
                height: dimensions,
                width: dimensions,
                // transform: 'translate(5px, 5px)'

            }}>{language === Locale.English ? 'あ' : 'A'}</button>
    );

};
const LanguageToggle: FC = () => {
    const router = useRouter();
    const pathName = usePathname();
    const locale: Locale = useLocale() as Locale;
    const currentScrollY = useRef<number>(0);

    const handleClick = () => {
        // const currentScrollY.current = window.scrollY;
        router.replace(pathName, { locale: locale === Locale.English ? Locale.Japanese : Locale.English });

    };






    return (
        <div onClick={handleClick} className="group fixed bottom-0 right-0 z-[1000] m-3 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-transparent p-0">
            <div className="scale-[0%] transition duration-700 group-hover:scale-[50%]">
                <WavyCircle waves1={7} waves2={3} />
            </div>
            <CharacterContainer language={locale} />
        </div>
    );
};

export default LanguageToggle;