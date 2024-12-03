// components/VideoFeed.tsx
'use client';

import {useState, useEffect, useCallback} from 'react';
import {useRouter} from 'next/navigation';

interface Video {
    id: number;
    title: string;
    src: string;
}

interface VideoFeedProps {
    videos: Video[];
    initialIndex: number;
}

export default function VideoFeed({videos, initialIndex}: VideoFeedProps) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollKey, setScrollKey] = useState(0); // Для обновления анимации

    useEffect(() => {
        const currentVideoId = videos[currentIndex]?.id;
        if (currentVideoId) {
            router.replace(`/video-feed6/${currentVideoId}`);
        }
    }, [currentIndex, videos, router]);

    const goToNextVideo = useCallback(() => {
        setScrollKey((prevKey) => prevKey + 1); // Сбрасываем анимацию
        setCurrentIndex((prevIndex) => (prevIndex < videos.length - 1 ? prevIndex + 1 : prevIndex));
    }, [videos.length]);

    const goToPrevVideo = useCallback(() => {
        setScrollKey((prevKey) => prevKey + 1); // Сбрасываем анимацию
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    }, []);

    const handleScroll = useCallback((event: WheelEvent) => {
        if (isScrolling) return;

        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 500);

        if (event.deltaY > 0 && currentIndex !== videos.length - 1) {
            goToNextVideo();
        } else if (event.deltaY < 0 && currentIndex !== 0) {
            goToPrevVideo();
        }
    }, [isScrolling, goToNextVideo, goToPrevVideo]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="flex flex-col items-center justify-center h-[92vh] overflow-hidden">
            <div className={'"max-w-full h-auto scrollEffect'}>
                <h3>{videos[currentIndex].title}</h3>
                <video
                    key={scrollKey} // Используем ключ для принудительного перерисовывания компонента
                    src={videos[currentIndex].src}
                    controls
                />
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
                    disabled={currentIndex === videos.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
