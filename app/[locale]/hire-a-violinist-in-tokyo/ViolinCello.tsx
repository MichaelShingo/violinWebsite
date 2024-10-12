import PlainTextSection from "@/app/components/PlainTextSection/PlainTextSection";
import VideoEmbed from "@/app/components/video/VideoEmbed";

const ViolinCello = () => {
    return (
        <div className="my-12">
            <PlainTextSection marginSize="small" paddingSize="none" paragraphs={[
                'Solo violin is a beautiful option for everything from the most intimate gatherings to larger weddings with over 100 people. As a versatile instrument that can play soaring melodies as well as harmonies at the same time, it has a wide-ranging repertoire and allows the musician great freedom to express his individual sound and playing style.',
            ]} />
            <img className="w-full bg-red-500" src="/angelo07.jpg" alt="Tokyo wedding violinist performs solo violin music at a wedding in Tokyo." />
            <VideoEmbed src="https://www.youtube.com/embed/Z5pfzuJydZ0?si=Av5Hgtn9XWIBxNvU" />
        </div>
    );
};

export default ViolinCello;


<iframe width="560" height="315" src="https://www.youtube.com/embed/BKq7u49UUY0?si=lcZMQ7rhQPpdg7ML" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>