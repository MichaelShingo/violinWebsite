import { ReactNode } from "react";
import GreenText from "../components/text/GreenText";
import { Link } from "@/i18n/routing";

type TextFormat = 'GreenText' | 'LinkExt' | 'LinkInt' | 'normal';
type Block = {
    type: TextFormat;
    content: string;
    link?: string;
};

export const formatTranslation = (translation: string): ReactNode => {
    const blocks: Block[] = [];

    let currentPositionInBlock = 0;
    let openingTagStartIndex = -1;
    let openingTagEndIndex = -1;
    let closingTagStartIndex = -1;
    let closingTagEndIndex = -2;

    let block = {
        type: 'normal' as TextFormat,
        content: '',
        link: ''
    };

    for (let i = 0; i < translation.length; i++) {
        if (translation[i] === '$' && translation[i + 1] === '$') {
            switch (currentPositionInBlock) {
                case 0:
                    if (closingTagEndIndex !== -1) {
                        blocks.push({
                            type: 'normal',
                            content: translation.substring(closingTagEndIndex + 2, i)
                        });
                    }
                    openingTagStartIndex = i;
                    currentPositionInBlock++;
                    break;
                case 1:
                    openingTagEndIndex = i;
                    block = {
                        type: translation.substring(openingTagStartIndex + 2, i) as TextFormat,
                        content: '',
                        link: '',
                    };
                    currentPositionInBlock++;
                    break;
                case 2:
                    closingTagStartIndex = i;
                    block.content = translation.substring(openingTagEndIndex + 2, closingTagStartIndex);
                    currentPositionInBlock++;
                    break;
                case 3:
                    closingTagEndIndex = i;
                    currentPositionInBlock = 0;
                    block.link = translation.substring(closingTagStartIndex + 2, i);
                    blocks.push(block);
                    break;
            }
        } else if (i >= translation.length - 1) {
            blocks.push({
                type: 'normal',
                content: translation.substring(closingTagEndIndex + 2, i + 1)
            });
        }
    }

    console.log("🚀 ~ formatTranslation ~ blocks:", blocks);


    const res: ReactNode = <>
        {blocks.map((block, index) => {
            switch (block.type) {
                case 'GreenText':
                    return <GreenText key={index}>{block.content}</GreenText>;
                case 'LinkExt':
                    return <a key={index} href={block.link} target="_blank" className="text-secondary underline">{block.content}</a>;
                case 'LinkInt':
                    return <Link key={index} href={block.link} className="text-secondary underline">{block.content}</Link>;
                case 'normal':
                    return <span key={index}>{block.content}</span>;
            }
        })}
    </>;

    return res;
};