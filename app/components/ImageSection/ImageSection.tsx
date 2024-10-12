import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twJoin } from "tailwind-merge";

interface ImageSectionProps {
    src: string;
    alt: string;
    marginSize?: 'small' | 'medium' | 'large';
}

const ImageSection: FC<ImageSectionProps> = ({ src, alt, marginSize }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', "10%"]);
    const cn = [];

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
        <section ref={sectionRef} className={twJoin([...cn, 'flex h-[90vh] items-center justify-center overflow-hidden bg-cover'])}
        >
            <motion.img style={{}} className="w-[100vw]" src={src} alt={alt} />
        </section>
    );
};

export default ImageSection;