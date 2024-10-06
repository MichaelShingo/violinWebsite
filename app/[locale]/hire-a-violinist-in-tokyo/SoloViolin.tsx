import ImageSection from "@/app/components/ImageSection/ImageSection";
import PlainTextSection from "@/app/components/PlainTextSection/PlainTextSection";
import VideoEmbed from "@/app/components/video/VideoEmbed";

const SoloViolin = () => {
    return (
        <>
            <PlainTextSection paragraphs={[
                'Solo violin is a beautiful option for everything from the most intimate gatherings to larger weddings with over 100 people. As a versatile instrument that can play soaring melodies as well as harmonies at the same time, it has a wide-ranging repertoire and allows the musician great freedom to express his individual sound and playing style.',
            ]} />
            <ImageSection src="/angelo07.jpg" alt="Tokyo wedding violinist performs solo violin music at a wedding in Tokyo." />
        </>
    );
};

export default SoloViolin;