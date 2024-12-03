"use client"
// components/VideoFeed.tsx
import React, { useRef, useState, useEffect } from 'react';
import VideoCard from './VideoCard';

interface Video {
    id: number;
    src: string;
}

const VideoFeed: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([
        { id: 1, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 2, src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 3, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 4, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 5, src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 6, src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    ]);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <div
            ref={containerRef}
            className="h-screen overflow-y-scroll snap-y snap-mandatory"
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
        </div>
    );
};

export default VideoFeed;
