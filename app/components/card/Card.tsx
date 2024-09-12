import { PerformanceCard } from "@/app/[locale]/violinist-in-tokyo/page";
import { FC } from "react";



interface CardProps {
    card: PerformanceCard;
}

const Card: FC<CardProps> = ({ card }) => {
    return (
        <div className="mx-40 w-fit rounded-md border-[3px] border-green-500 bg-green-600 p-4 shadow-lg">
            <h3 className="my-3 text-8xl text-green-900">{card.title}</h3>
            <h4 className="my-3 text-2xl text-green-800 first-letter:uppercase">{card.period} | {card.ensembleType}</h4>
            <p className="font-paragraph text-xl font-thin text-green-100">{card.description}</p>
        </div>
    );
};

export default Card;