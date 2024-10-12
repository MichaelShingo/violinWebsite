import { FC, ReactNode } from "react";
import Typography from "../text/Typography";
import { twJoin } from "tailwind-merge";
import { standardPadding } from "@/app/constants/styleConstants";

interface PlainTextSectionProps {
    title?: string;
    paragraphs?: string[];
    children?: ReactNode;
    marginSize?: 'small' | 'medium' | 'large';
    paddingSize?: 'none' | 'small' | 'medium' | 'large';
}
const PlainTextSection: FC<PlainTextSectionProps> = ({ title, paragraphs, children, marginSize, paddingSize }) => {
    const cn = [];

    switch (paddingSize) {
        case 'none':
            cn.push('px-0');
            break;
        case 'small':
            cn.push('px-4');
            break;
        case 'medium':
            cn.push('px-8');
            break;
        case 'large':
        default:
            cn.push('px-12');
    }

    switch (marginSize) {
        case 'small':
            cn.push('my-8');
            break;
        case 'medium':
            cn.push('my-16');
            break;
        case 'large':
        default:
            cn.push('my-24');
            break;
    }

    return (
        <section className={twJoin([...cn, standardPadding, 'flex flex-col items-center justify-center'])} >
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