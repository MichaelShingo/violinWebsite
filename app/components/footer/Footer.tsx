import { FC } from "react";
import Divider from "../divider/Divider";
import BassClefIcon from "../icons/BassClefIcon";
import PatreonIcon from "../icons/PatreonIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import GreenText from "../text/GreenText";
import { CommonIconProps } from "../icons/utils";
import { Link } from "@/i18n/routing";
import CustomLink from "../CustomLink/CustomLink";

interface FooterIconProps {
    href: string;
    icon: FC<CommonIconProps>;
}

const FooterIcon: FC<FooterIconProps> = ({ href, icon: Icon }) => {
    return (
        <a className="flex h-[150px] w-[150px] scale-[60%] items-center justify-center transition sm:scale-[70%] md:scale-[80%] lg:scale-100" target="_blank" href={href}>
            <Icon pathClassName="fill-accent stroke-none stroke-[15px] transition hover:fill-primary" />
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="-z-[10] flex h-fit min-h-dvh w-full flex-col justify-between bg-secondary px-4 py-12 sm:px-24 md:px-28 lg:px-36">
            <Divider icon={BassClefIcon} variant="small" iconColor="fill-white" color="bg-white" />
            <h2 className="text-center text-5xl text-primary">Ready to book? <CustomLink color="text-primary" href={'/contact-violinist-in-tokyo'}>Get in touch!</CustomLink></h2>
            <div className="md:gap-18 -mt-6 flex w-full flex-row items-center justify-center gap-4 sm:gap-12 lg:gap-32">
                <FooterIcon href="https://www.youtube.com/@MichaelShingo" icon={YoutubeIcon} />
                <FooterIcon href="https://www.patreon.com/michaelshingo/" icon={PatreonIcon} />
                <FooterIcon href="https://www.youtube.com/@MichaelShingo" icon={PatreonIcon} />
            </div>
            <div className="">
                <h5 className="pt-5 text-center text-xl text-primary"><b>{`Copyright © ${new Date().getFullYear()}`}</b><br></br> Web Design by <GreenText color="text-accent">Michael Shingo Crawford</GreenText></h5>
                <h5 className="text-center text-sm text-white">Built with <b>Next.js</b> | <b>Typescript</b> | <b>Tailwind CSS</b> | <b>Framer Motion</b></h5>
            </div>
        </footer >
    );
};

export default Footer;