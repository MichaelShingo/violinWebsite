'use client';
import React, { FC } from "react";
import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from "next-intl";
import { Locale } from "@/app/utils/types";
import WavyCircle from "../transitionLink/WavyCircle";
import LanguageIcon from "../icons/LanguageIcon";

interface CharacterContainerProps {
    language: Locale;
}
const LanguageToggle: FC = () => {
    const router = useRouter();
    const pathName = usePathname();
    const locale: Locale = useLocale() as Locale;

    const handleClick = () => {
        router.replace(pathName, { locale: locale === 'en' ? 'jp' : 'en' });
    };

    return (
        <div onClick={handleClick} className="group pointer-events-auto fixed bottom-0 right-0 z-[1000] m-3 flex h-[75px] w-[100px] items-center justify-center rounded-full bg-transparent p-0">
            <div className="scale-[0%] transition duration-700 group-hover:scale-[50%]">
                <WavyCircle waves1={7} waves2={3} />
            </div>
            <button onClick={handleClick} className="absolute flex h-[40px] w-[55px] items-center justify-center rounded-lg bg-green-sat p-0 text-2xl font-normal"
                style={{
                }}><LanguageIcon /></button>
        </div>
    );
};

export default LanguageToggle;