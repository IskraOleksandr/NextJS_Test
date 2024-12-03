'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Video } from '@/types/video.interface';



interface VideoFeedProps {
    initialVideos: Video[];
    initialIndex: number;
}

export default function VideoFeed({ initialVideos, initialIndex }: VideoFeedProps) {
    const router = useRouter();
    const [videos, setVideos] = useState(initialVideos);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scrollKey, setScrollKey] = useState(0); // Для сброса анимации
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const currentVideoId = videos[currentIndex]?.id;
        if (currentVideoId) {
            router.replace(`/video-feed6X/${currentVideoId}`);
        }
    }, [currentIndex, videos, router]);

    const loadMoreVideos = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch(`https://localhost:7154/Videos/getallvideoinfopaginated/${pageNumber+1}/5/0`);
            const newVideos: Video[] = await response.json();
            if (newVideos.length > 0) {
                setVideos((prev) => [...prev, ...newVideos]);
                setPageNumber((prev) => prev + 1);
            }
        } catch (error) {
            console.error('Error loading more videos:', error);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, pageNumber]);

    const goToNextVideo = useCallback(() => {
        if (currentIndex === videos.length - 1) {
            loadMoreVideos(); // Загружаем больше видео, если достигнут конец
        } else {
            setScrollKey((prevKey) => prevKey + 1);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }, [currentIndex, videos.length, loadMoreVideos]);

    const goToPrevVideo = useCallback(() => {
        setScrollKey((prevKey) => prevKey + 1);
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-[92vh] overflow-hidden">
            <div className="max-w-full h-auto scrollEffect">
               <h3>{videos[currentIndex].tittle}</h3>
                    <video
                        key={scrollKey}
                        src={videos[currentIndex].videoUrl}
                        controls/>
            </div>

            <div className="flex justify-between w-full mt-4">
                <button
                    onClick={goToPrevVideo}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={currentIndex === 0}
                >
                    Previous
                </button>

                <button
                    onClick={goToNextVideo}
                    className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                    disabled={isLoading}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
