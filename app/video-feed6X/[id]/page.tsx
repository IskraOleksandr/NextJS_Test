// 'use client'
import VideoFeed from '../VideoFeed';
import { getVideos } from '../get-video';

export default async function VideoPage({ params }: { params: { id: string } }) {
    // Загрузка начальных видео
    const initialVideos = await getVideos(1, 2, parseInt(params.id, 10));
    const initialVideoIndex = initialVideos.findIndex(video => video.id === parseInt(params.id, 10));

    return (
        <div>
            <h1 className="text-2xl font-bold">Video Feed</h1>
            <VideoFeed
                initialVideos={initialVideos}
                initialIndex={initialVideoIndex >= 0 ? initialVideoIndex : 0}
            />
        </div>
    );
}
