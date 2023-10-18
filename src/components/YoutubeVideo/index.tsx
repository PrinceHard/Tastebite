
const YoutubeVideo = ({ videoUrl }: { videoUrl: string }) => {
    let embedUrl = ""
    // Extrair o ID do vídeo do URL do YouTube usando uma expressão regular
    if (videoUrl) {
        const videoId = videoUrl?.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];
        // URL do vídeo incorporado
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
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
}
export default YoutubeVideo
