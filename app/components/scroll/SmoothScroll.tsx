import { FC, useEffect } from "react";
import Scrollbar from 'smooth-scrollbar';

const options = {
    damping: 0.07,
};
const SmoothScroll: FC = () => {
    useEffect(() => {
        Scrollbar.init(document.body, options);
    });
    return null;
};

export default SmoothScroll;