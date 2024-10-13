import Button from "@/app/components/Button/Button";
import PlainTextSection from "@/app/components/PlainTextSection/PlainTextSection";
import VideoEmbed from "@/app/components/video/VideoEmbed";

const SoloViolin = () => {
    return (
        <div className="my-12 flex flex-col items-center justify-center">

            <PlainTextSection marginSize="none" paddingSize="none" paragraphs={[
                'Solo violin is a beautiful option for everything from the most intimate gatherings to larger weddings with over 100 people. As a versatile instrument that can play soaring melodies as well as harmonies at the same time, it has a wide-ranging repertoire and allows the musician great freedom to express his individual sound and playing style.',
            ]} />

            {/* <Button variant="secondary">Watch a Video</Button> */}

        </div>
    );
};

export default SoloViolin;