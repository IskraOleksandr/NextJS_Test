
import { NextResponse } from 'next/server';

const videos = [
    { id: 1, title:'video1', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    { id: 2, title:'video2', src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
    { id: 3, title:'video3', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    { id: 4, title:'video4', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    { id: 5, title:'video5X', src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
    { id: 6, title:'video6', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const afterId = parseInt(searchParams.get('afterId') || '0', 10);

    const newVideos = videos.filter((video) => video.id > afterId).slice(0, 3); // Загружаем 5 видео
    return NextResponse.json(newVideos);
}