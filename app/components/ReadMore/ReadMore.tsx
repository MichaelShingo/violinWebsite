import { useState } from "react";

interface ReadMoreProps {
    content: string;
}
const ReadMore = ({ content }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const shortenContent = (content: string) => {
        let i = 100;
        let currentChar = content[i];
        while (currentChar !== ' ') {
            currentChar = content[i];
            i++;
        }
        return content.slice(0, i) + '. . .';
    };

    const shortenedContent = shortenContent(content);
    return (
        <div className="flex flex-col items-start">
            {isReadMore ? content : shortenedContent}
            <button className="font-bold" onClick={() => setIsReadMore(!isReadMore)}>
                {isReadMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ReadMore;