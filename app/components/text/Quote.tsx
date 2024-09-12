import { FC, ReactNode } from "react";

interface QuoteProps {
    children: ReactNode;
}

const Quote: FC<QuoteProps> = ({ children }) => {
    return (
        <div className="my-5 flex h-dvh items-center justify-center px-28 text-7xl leading-[5.3rem]">
            <div>
                <div className="absolute h-[12%] w-[10px] -translate-x-10 translate-y-2 rounded-sm bg-black" />

                {children}
            </div>
        </div>);
};

export default Quote;