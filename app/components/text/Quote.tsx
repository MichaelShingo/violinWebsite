import { FC, ReactNode } from "react";

interface QuoteProps {
    children: ReactNode;
}

const Quote: FC<QuoteProps> = ({ children }) => {
    return (
        <div className="my-5 h-fit text-5xl leading-[4.1rem]">
            <div className="absolute h-[12%] w-[5px] -translate-x-8 translate-y-2 bg-black" />
            {children}
        </div>);
}

export default Quote;