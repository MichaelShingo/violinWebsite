import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageSectionProps {
    src: string;
    alt: string;
}

const ImageSection: FC<ImageSectionProps> = ({ src, alt }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', "10%"]);
    return (
        <section ref={sectionRef} className="my-24 flex h-[90vh] items-center justify-center overflow-hidden bg-cover"
            style={{
                // backgroundImage: `url(${src})`,
            }}
        >
            <motion.img style={{}} className="w-[100vw]" src={src} alt={alt} />
        </section>
    );
};

export default ImageSection;