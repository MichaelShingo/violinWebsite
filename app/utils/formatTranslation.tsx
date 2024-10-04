import { ReactNode } from "react";
import GreenText from "../components/text/GreenText";

type TextFormat = 'GreenText' | 'Link' | 'normal';
type Block = {
    type: TextFormat;
    content: string;
};

export const formatTranslation = (translation: string): ReactNode => {
    const blocks: Block[] = [];

    let currentPositionInBlock = 0;
    let openingTagStartIndex = -1;
    let openingTagEndIndex = -1;
    let closingTagStartIndex = -1;
    let closingTagEndIndex = -1;

    let block = {
        type: 'normal' as TextFormat,
        content: ''
    };

    for (let i = 0; i < translation.length; i++) {
        const current = translation[i];
        const next = translation[i + 1];

        if (current === '/' && next === '/') {
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
                        content: ''
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

    const res: ReactNode = <>
        {blocks.map((block, index) => {
            switch (block.type) {
                case 'GreenText':
                    return <GreenText key={index}>{block.content}</GreenText>;
                case 'Link':
                    return <a key={index} href={block.content}>{block.content}</a>;
                case 'normal':
                    return <span key={index}>{block.content}</span>;
            }
        })}
    </>;

    return res;
};