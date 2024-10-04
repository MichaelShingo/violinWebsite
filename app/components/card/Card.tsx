'use client';
import { FC } from "react";
import Typography from "../text/Typography";
import { useTranslations } from "next-intl";

// export type Ensemble = 'Solo' | 'Chamber' | 'Orchestra' | 'ソロ' | '室内楽' | 'オーケスト';

export type PerformanceCard = {
    title: string;
    ensembleType: string;
    description?: string;
    period: string,
    image?: string;
    link?: string;
};

interface CardProps {
    card: PerformanceCard;
}

const Card: FC<CardProps> = ({ card }) => {
    const t = useTranslations('Violin');
    return (
        <>
            <div className="mx-40 hidden h-[105vh] w-[500px] flex-col justify-center border-[5px] border-l-black border-r-black bg-primary p-6 transition duration-500 lg:flex"
            >
                <h3 className="my-2 text-5xl text-black">{card.title}</h3>
                <h4 className="my-3 text-lg text-black first-letter:uppercase">{card.period} | {card.ensembleType}</h4>
                <Typography variant="p">{card.description}</Typography>
                <a target="_blank" className="my-6 w-fit border-[2px] border-black p-3 transition hover:bg-black hover:text-white" href={card.link}>{t('readAboutEnsemble')}</a>
            </div>
            <div className="block h-fit w-full p-6 lg:hidden"
            >
                <Typography variant="h3" className="mb-2 text-[1.7rem] text-black">{card.title}</Typography>
                <Typography variant="h4" className="my-2 text-[1.1rem] text-black first-letter:uppercase">{card.period} | {card.ensembleType}</Typography>
                <Typography variant="p">{card.description}</Typography>
            </div>

        </>
    );
};

export default Card;