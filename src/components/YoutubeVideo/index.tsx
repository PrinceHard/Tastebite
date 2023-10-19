
const extractVideoId = (url: string) => {
    const regExp =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);

    if (match && match[1]) {
        return match[1];
    } else {
        // Trate o caso em que o URL não é um URL válido do YouTube
        return null;
    }
};

const YoutubeVideo = ({ videoUrl }: { videoUrl: string }) => {
    const videoId = extractVideoId(videoUrl)

    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div className="video-container">
                <span className="font-semibold text-lg">Video Tutorial:</span>
                <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src={embedUrl}
                    allowFullScreen
                ></iframe>
            </div>
        )
    } else {
        // Trate o caso em que o URL não é um URL válido do YouTube
        return <div>URL do YouTube inválido</div>;
    }
}
export default YoutubeVideo
