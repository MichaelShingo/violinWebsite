
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twJoin } from 'tailwind-merge';

const ImageWithLoader = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        if (imgRef.current.complete) {
            setIsLoaded(true);
        }
        if (imgRef.current) {
            imgRef.current.addEventListener('load', handleImageLoad);
        }
    }, []);



    return (
        <div className={twJoin(['relative', className])}>
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="loader">Loading...</div>
                </div>
            )}
            <motion.img
                ref={imgRef}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                className={twJoin(['w-full h-full object-cover', isLoaded ? 'block' : 'hidden'])}
            />
        </div>
    );
};

export default ImageWithLoader;