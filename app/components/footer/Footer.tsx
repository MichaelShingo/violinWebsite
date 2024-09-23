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
        <a className="h-[150px] w-[150px] transition hover:scale-[120%]" target="_blank" href={href}>
            <Icon pathClassName="fill-black stroke-none stroke-[15px] transition hover:fill-accent" />
        </a>
    );
};

const Footer = () => {
    return (
        <div className="-z-[10] flex h-fit min-h-dvh w-full flex-col justify-between bg-primary px-36 py-12">
            <Divider icon={BassClefIcon} variant="small" color="fill-black" />
            <h2 className="text-center text-5xl">Ready to book? <CustomLink href={'/contact-violinist-in-tokyo'}>Get in touch!</CustomLink></h2>
            <div className="-mt-6 flex flex-row items-center justify-center gap-32">
                <FooterIcon href="https://www.youtube.com/@MichaelShingo" icon={YoutubeIcon} />
                <FooterIcon href="https://www.patreon.com/michaelshingo/" icon={PatreonIcon} />
                <FooterIcon href="https://www.youtube.com/@MichaelShingo" icon={PatreonIcon} />
            </div>
            <div className="">
                <h5 className="pt-5 text-center text-xl"><b>{`Copyright © ${new Date().getFullYear()}`}</b><br></br> Web Design by <GreenText>Michael Shingo Crawford</GreenText></h5>
                <h5 className="text-center text-sm">Built with <b>Next.js</b> | <b>Typescript</b> | <b>Tailwind CSS</b> | <b>Framer Motion</b></h5>
            </div>
        </div >
    );
};

export default Footer;