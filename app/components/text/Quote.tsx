import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

interface QuoteProps {
    children: ReactNode;
}

const Quote: FC<QuoteProps> = ({ children }) => {
    return (
        <div className={twJoin(['my-5  px-4 sm:px-16 md:px-28 flex h-fit min-h-[135vh] w-full items-center justify-center overflow-hidden text-4xl leading-[3rem] sm:text-5xl sm:leading-[3.5rem] md:text-6xl md:leading-[4.8rem] lg:text-7xl lg:leading-[5.3rem]'])}>
            <div className="">
                <div className="absolute h-[12%] w-[5px] -translate-x-6 translate-y-2 rounded-sm bg-black md:w-[10px] md:-translate-x-10" />
                {children}
            </div>
        </div>);
};

export default Quote;