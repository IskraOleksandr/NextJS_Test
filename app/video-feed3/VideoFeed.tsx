"use client"
// components/VideoFeed.tsx
import React, { useRef, useState, useEffect } from 'react';
import VideoCard from './VideoCard';

interface Video {
    id: number;
    src: string;
}

const VideoFeed: React.FC = () => {
    const [videos] = useState<Video[]>([
        { id: 1, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 2, src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 3, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 4, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 5, src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 6, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    ]);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Прокрутка к активному видео при изменении currentVideoIndex
    useEffect(() => {
        const activeVideo = containerRef.current?.querySelector(
            `[data-index="${currentVideoIndex}"]`
        );
        activeVideo?.scrollIntoView({ behavior: 'smooth' });
    }, [currentVideoIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        setCurrentVideoIndex(index);
                    }
                });
            },
            { threshold: 0.7 }
        );

        const elements = containerRef.current?.querySelectorAll('.video-section');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Функции для переключения видео
    const handleNextVideo = () => {
        if (currentVideoIndex < videos.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const handlePrevVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
    };

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-mandatory relative"
        >
            {videos.map((video, index) => (
                <div
                    key={video.id}
                    data-index={index}
                    className="video-section h-screen snap-start"
                >
                    <VideoCard src={video.src} isActive={index === currentVideoIndex} />
                </div>
            ))}

            {/* Кнопки для перехода к следующему и предыдущему видео */}
            <button
                onClick={handlePrevVideo}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
            >
                Previous
            </button>
            <button
                onClick={handleNextVideo}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default VideoFeed;
