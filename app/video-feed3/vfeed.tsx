"use client"
// components/VideoFeed.tsx
import React, { useRef, useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import { useRouter } from 'next/navigation';

interface Video {
    id: number;
    src: string;
}

const VFeed: React.FC = () => {
    const [videos] = useState<Video[]>([
        { id: 1, src: '/videos/video1.mp4' },
        { id: 2, src: '/videos/video2.mp4' },
        { id: 3, src: '/videos/video3.mp4' },
    ]);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Обновляем URL при изменении currentVideoIndex
    const updateUrlWithId = (index: number) => {
        const videoId = videos[index].id;
        const newUrl = `/video-feed3?id=${videoId}`;
        router.push(newUrl);
    };
    // Прокрутка к активному видео при изменении currentVideoIndex
    useEffect(() => {
        const activeVideo = containerRef.current?.querySelector(
            `[data-index="${currentVideoIndex}"]`
        );
        activeVideo?.scrollIntoView({ behavior: 'smooth' });
    }, [currentVideoIndex]);


    // Обновление currentVideoIndex на основе видимости видео
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    if (entry.isIntersecting) {
                        updateUrlWithId(index);
                        setCurrentVideoIndex(index);

                    }
                });
            },
            { threshold: 0.7 } // Видео считается видимым, если оно хотя бы на 70% в пределах видимой области
        );

        const elements = containerRef.current?.querySelectorAll('.video-section');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

// Функции для переключения видео
    const handleNextVideo = () => {
        if (currentVideoIndex < videos.length - 1) {
            const newIndex = currentVideoIndex + 1;
            setCurrentVideoIndex(newIndex);
            updateUrlWithId(newIndex); // Обновляем URL при переходе к следующему видео
        }
    };

    const handlePrevVideo = () => {
        if (currentVideoIndex > 0) {
            const newIndex = currentVideoIndex - 1;
            setCurrentVideoIndex(newIndex);
            updateUrlWithId(newIndex); // Обновляем URL при переходе к предыдущему видео
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
            <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-10">
                <button
                    onClick={handlePrevVideo}
                    className="bg-black bg-opacity-50 text-white p-2 rounded"
                >
                    Previous
                </button>
            </div>

            <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button
                    onClick={handleNextVideo}
                    className="bg-black bg-opacity-50 text-white p-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default VFeed;
