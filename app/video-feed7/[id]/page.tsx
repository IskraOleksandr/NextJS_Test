"use client"

import {useEffect, useState } from 'react';
import VideoFeed from '../VideoFeed';
import { getVideos, getNewVideos } from '../vfeed';
interface Video {
    id: number;
    title: string;
    src: string;
}
const VideoPage =({ params }: { params: { id: string } }) =>{
    const [videos, setVideos] = useState<Video[]>([]);
    //const videos = await getVideos(); // Загрузка данных
    const initialVideoIndex = videos.findIndex(video => video.id === parseInt(params.id, 10));

    useEffect(() => {
        const fetchData = async () => {
            const result = await getVideos();
            setVideos(result);
        };
        fetchData();
    }, []);


    const loadNextVideo = async () => {
       const res = await getNewVideos();
       setVideos(res);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Video Feed</h1>
            <VideoFeed onGetNewVideo={loadNextVideo} videos={videos} initialIndex={initialVideoIndex >= 0 ? initialVideoIndex : 0} />
        </div>
    );
}
export default VideoFeed;