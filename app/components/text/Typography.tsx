import { FC, ReactNode } from "react";


export enum TypographyVariant {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    P = 'p',
}

interface TypographyProps {
    variant: TypographyVariant;
    children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, children }) => {

    const generateVariant = (): ReactNode => {
        let res;
        switch (variant) {
            case TypographyVariant.H2:
                res = <h2 className="my-8 -translate-x-[10px] text-6xl uppercase text-black first-letter:text-8xl">{children}</h2>
                break;
            case TypographyVariant.P:
                res = <p className="my-5 text-justify text-2xl leading-[2.7rem] text-black">{children}</p>
            default:
                break;
        }
        return res;
    }

    return (
        <>
            {generateVariant()}
        </>
    );
}

export default Typography;