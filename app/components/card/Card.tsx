import { PerformanceCard } from "@/app/[locale]/violinist-in-tokyo/page";
import { FC } from "react";

interface CardProps {
    card: PerformanceCard;
}

const Card: FC<CardProps> = ({ card }) => {
    const xOffset = Math.random() * 400 + 40;
    const yOffset = 0; //(Math.random() - 0.5) * 200;

    return (
        <div className="mx-40 flex h-[105vh] w-[500px] cursor-pointer flex-col justify-center border-[5px] border-l-black border-r-black bg-primary p-6 transition duration-500 hover:scale-105"
            style={{
                // transform: `translateX(${xOffset}px) translateY(${yOffset}px)`,
            }}
        >
            <h3 className="my-2 text-5xl text-black">{card.title}</h3>
            <h4 className="my-3 text-lg text-black first-letter:uppercase">{card.period} | {card.ensembleType}</h4>
            <p className="font-paragraph text-2xl font-thin text-black">{card.description}</p>
        </div>
    );
};

export default Card;