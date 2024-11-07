import { twJoin } from "tailwind-merge";
import Typography from "../text/Typography";
import { standardPadding } from "@/app/constants/styleConstants";

interface BioSectionProps {
    title: string;
    content: string;
}

const BioSection = ({ title, content }) => {
    return (
        <section className={twJoin(['overflow-hidden min-h-dvh flex flex-col  items-center justify-center gap-12', standardPadding])}>
            <Typography className={twJoin(['absolute text-center text-white p-5 w-[900px] bg-black'])} variant="h2">{title}</Typography>
            <Typography className={twJoin(['max-w-[900px]'])} align="justify" variant="p">
                {content}
            </Typography>
        </section>
    );
};

export default BioSection;