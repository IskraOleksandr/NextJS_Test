"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import VideoCard from '../VideoCard';

interface Video {
    id: number;
    src: string;
}

const VideoPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    const videos: Video[] = [
        { id: 1, src: '/videos/video1.mp4' },
        { id: 2, src: '/videos/video2.mp4' },
        { id: 3, src: '/videos/video3.mp4' },
    ];

    // Проверка и приведение id к числу
    const videoId = typeof id === 'string' ? parseInt(id, 10) : NaN;
    const initialIndex = !isNaN(videoId) ? videos.findIndex(video => video.id === videoId) : 0;
    const [currentVideoIndex, setCurrentVideoIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
    const [isManualChange, setIsManualChange] = useState(false); // флаг для отслеживания ручного изменения

    // Прокручиваем к активному видео
    useEffect(() => {
        const activeVideo = containerRef.current?.querySelector(
            `[data-index="${currentVideoIndex}"]`
        );
        activeVideo?.scrollIntoView({ behavior: 'smooth' });
    }, [currentVideoIndex]);

    // Используем IntersectionObserver для отслеживания видимости видео
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isManualChange) { // игнорируем изменения при ручном переходе
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        if (index !== currentVideoIndex) {
                            // updateUrlWithId(index);
                            setCurrentVideoIndex(index);
                        }
                    }
                });
            },
            {
                threshold: 0.5, // Видео считается видимым, если хотя бы 50% видимо на экране
            }
        );

        const videoElements = containerRef.current?.querySelectorAll('.video-section');
        videoElements?.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, [currentVideoIndex, isManualChange]); // добавляем isManualChange в зависимость

    // Функция для перехода к следующему видео
    const handleNextVideo = () => {
        router.push('/video-feed5');
        /*if (currentVideoIndex < videos.length - 1) {
            const newIndex = currentVideoIndex + 1;
            setIsManualChange(true); // Устанавливаем флаг ручного изменения
            setCurrentVideoIndex(newIndex);
            updateUrlWithId(newIndex);
        }*/
    };

    // Функция для перехода к предыдущему видео
    const handlePrevVideo = () => {
        if (currentVideoIndex > 0) {
            const newIndex = currentVideoIndex - 1;
            setIsManualChange(true); // Устанавливаем флаг ручного изменения
            setCurrentVideoIndex(newIndex);
            updateUrlWithId(newIndex);
        }
    };

    // Обновление URL при переключении видео
    const updateUrlWithId = (index: number) => {
        const videoId = videos[index].id;
        // Обновляем URL в строке браузера с новым id
        router.push(`/video-feed4/${videoId}`);
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

export default VideoPage;
