
import VideoFeed from '../VideoFeed';
import { getVideos } from '../vfeed';

export default async function VideoPage({ params }: { params: { id: string } }) {
    const videos = await getVideos(); // Загрузка данных
    const initialVideoIndex = videos.findIndex(video => video.id === parseInt(params.id, 10));


    return (
        <div>
            <h1 className="text-2xl font-bold">Video Feed</h1>
            <VideoFeed videos={videos} initialIndex={initialVideoIndex >= 0 ? initialVideoIndex : 0} />
        </div>
    );
}