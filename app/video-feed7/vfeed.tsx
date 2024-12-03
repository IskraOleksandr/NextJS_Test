// lib/api.ts
export async function getVideos() {
    return [
        { id: 1, title:'video1', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 4, title:'video2', src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 5, title:'video3', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 7, title:'video4', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 6, title:'video5', src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 9, title:'video6', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    ];
}
export async function getNewVideos() {
    return [
        { id: 11, title:'video4', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
        { id: 13, title:'video5', src: 'https://www.youtube.com/shorts/bQVRLUpqsUU' },
        { id: 15, title:'video6', src: 'https://www.youtube.com/shorts/l5xTTwh4lWw' },
    ];
}
