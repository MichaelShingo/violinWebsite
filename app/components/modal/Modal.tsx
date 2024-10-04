'use client';
import { FC, ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/redux/store";
import VideoEmbed from "../video/VideoEmbed";
import { setIsModalOpen } from "@/redux/features/locationSlice";
import { useDispatch } from "react-redux";

const modalVariants = {
    hidden: { opacity: 0, transition: { duration: .5 } },
    visible: { opacity: 1, transition: { duration: .5 } },
};

const Modal: FC = () => {
    const modalContent: string = useAppSelector((state) => state.locationReducer.value.modalContent);
    const isModalOpen: boolean = useAppSelector((state) => state.locationReducer.value.isModalOpen);
    const dispatch = useDispatch();

    const generateModalContent = () => {
        switch (modalContent) {
            case 'video':
                return <VideoEmbed />;
            default:
                return null;
        }
    };

    return (
        <AnimatePresence>
            {isModalOpen &&
                <motion.div initial="hidden" animate="visible" variants={modalVariants} exit="hidden" className="fixed z-[101] flex h-dvh w-dvw items-center justify-center bg-black/70 backdrop-blur-md">
                    <button onClick={() => dispatch(setIsModalOpen(false))} className="group absolute right-0 top-0 mr-8 mt-5 h-[75px] w-[75px]">
                        <div className="h-2 w-14 translate-y-[37%] rotate-45 rounded-md bg-accent transition group-hover:bg-white"></div>
                        <div className="h-2 w-14 -translate-y-[37%] -rotate-45 rounded-md bg-accent transition group-hover:bg-white"></div>
                    </button>
                    <div className="h-fit w-fit">
                        {generateModalContent()}
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    );
};

export default Modal;