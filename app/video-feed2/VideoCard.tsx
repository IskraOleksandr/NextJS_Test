"use client"
// components/VideoCard.tsx
import React, { useRef, useEffect } from 'react';

interface VideoCardProps {
    src: string;
    isActive: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({ src, isActive }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isActive) {
            videoRef.current?.play();
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0; // Сброс к началу
            }
        }
    }, [isActive]);

    return (
        <video
            ref={videoRef} style={{border:'solid 1px red'}}
            src={src}
            loop
            muted
            playsInline
            className="w-[25rem] h-full object-cover"
        />
    );
};

export default VideoCard;
