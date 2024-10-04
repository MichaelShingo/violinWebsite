import { FC } from "react";
import Divider from "../divider/Divider";
import BassClefIcon from "../icons/BassClefIcon";
import PatreonIcon from "../icons/PatreonIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import GreenText from "../text/GreenText";
import { CommonIconProps } from "../icons/utils";
import { Link } from "@/i18n/routing";
import CustomLink from "../CustomLink/CustomLink";
import { useTranslations } from "next-intl";
import CodingWebsiteIcon from "../icons/CodingWebsiteIcon";

interface FooterIconProps {
    href: string;
    icon: FC<CommonIconProps>;
}

const FooterIcon: FC<FooterIconProps> = ({ href, icon: Icon }) => {
    return (
        <a className="group flex h-[150px] w-[150px] scale-[60%] items-center justify-center transition sm:scale-[70%] md:scale-[80%] lg:scale-100" target="_blank" href={href}>
            <Icon pathClassName="fill-accent stroke-none stroke-[15px] transition group-hover:fill-primary" />
        </a>
    );
};

const Footer = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="lg:px-34 -z-[10] flex h-[100vh] min-h-[850px] w-full flex-col items-center justify-between bg-secondary px-4 py-6 sm:px-24 md:px-28 md:py-8 lg:py-8">
            <Divider icon={BassClefIcon} variant="small" iconColor="fill-white" color="bg-white" />
            <div className="flex flex-col items-center gap-5 md:gap-10">
                <h2 className="text-center text-3xl text-primary md:text-5xl">{t('readyToBook')}</h2>
                <button className="h-fit w-fit border-[3px] border-white px-8 py-3 text-lg text-white transition hover:border-white hover:bg-white hover:text-secondary md:border-[4px] md:px-10 md:py-4 md:text-3xl">{t('getInTouch')}</button>
            </div>
            {/* <CustomLink color="text-primary" href={'/contact-violinist-in-tokyo'}>Get in touch!</CustomLink> */}
            <div className="md:gap-18 -mt-6 flex w-full flex-row items-center justify-center gap-4 sm:gap-12 lg:gap-32">
                <FooterIcon href="https://www.youtube.com/@MichaelShingo" icon={YoutubeIcon} />
                <FooterIcon href="https://portfolio.michaelshingo.com/" icon={CodingWebsiteIcon} />
                <FooterIcon href="https://www.patreon.com/michaelshingo" icon={PatreonIcon} />
            </div>
            <div className="">
                <h5 className="pt-5 text-center text-xl font-thin text-primary">{`${t('copyright')} © ${new Date().getFullYear()}`}</h5>
                <h5 className="text-center text-white">{t('webDesign')}</h5>
                <h5 className="text-center font-paragraph text-lg font-thin text-white">{t('builtWith')}</h5>
            </div>
        </footer >
    );
};

export default Footer;;