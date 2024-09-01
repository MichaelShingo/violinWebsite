'use client';
import { FC } from "react";
import { useRouter } from '@/i18n/routing';

const LanguageToggle: FC = () => {
    const router = useRouter();
    const handleClick = () => {
        router.replace('/violinist-in-tokyo', { locale: 'jp' })
    }

    return (
        <button className="z-[1000] h-[500px] w-[500px] bg-red-500" onClick={handleClick}></button>
    )
}

export default LanguageToggle;