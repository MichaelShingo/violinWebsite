'use client';
import { FC } from "react";
import Typography from "../text/Typography";
import { isMobile } from 'react-device-detect';

export type Ensemble = 'Solo' | 'Chamber' | 'Orchestra';

export type PerformanceCard = {
    title: string;
    ensembleType: Ensemble;
    description?: string;
    period: string,
    image?: string;
};

interface CardProps {
    card: PerformanceCard;
}

const Card: FC<CardProps> = ({ card }) => {
    return (
        <>
            <div className="mx-40 hidden h-[105vh] w-[500px] cursor-pointer flex-col justify-center border-[5px] border-l-black border-r-black bg-primary p-6 transition duration-500 hover:scale-105 lg:flex"
            >
                <h3 className="my-2 text-5xl text-black">{card.title}</h3>
                <h4 className="my-3 text-lg text-black first-letter:uppercase">{card.period} | {card.ensembleType}</h4>
                <Typography variant="p">{card.description}</Typography>
            </div>
            <div className="block h-fit w-full p-6 lg:hidden"
            >
                <Typography variant="h3" className="text-3xl text-black">{card.title}</Typography>
                <Typography variant="h4" className="my-2 text-lg text-black first-letter:uppercase">{card.period} | {card.ensembleType}</Typography>
                <Typography variant="p">{card.description}</Typography>
            </div>

        </>
    );
};

export default Card;