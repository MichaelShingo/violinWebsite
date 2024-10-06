import { FC, ReactNode } from "react";
import Typography from "../text/Typography";
import { twJoin } from "tailwind-merge";
import { standardPadding } from "@/app/constants/styleConstants";

interface PlainTextSectionProps {
    title?: string;
    paragraphs?: string[];
    children?: ReactNode;
}
const PlainTextSection: FC<PlainTextSectionProps> = ({ title, paragraphs, children }) => {
    return (
        <section className={twJoin([standardPadding, 'flex flex-col items-center justify-center my-24'])} >
            <div className="max-w-[1200px]">

                {title &&
                    <Typography variant="h2">{title}</Typography>
                }
                <div className="flex flex-col gap-5">

                    {paragraphs && paragraphs.map((paragraph, index) => {
                        return (
                            <Typography key={index} className={twJoin([])} variant="p">
                                {paragraph}
                            </Typography>
                        );
                    })}
                </div>
                {children &&
                    <Typography variant="p">
                        {children}
                    </Typography>
                }
            </div>
        </section>
    );
};

export default PlainTextSection;