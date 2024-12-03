// components/ContentTable.js
import { Video } from '@/types/video.interface';
import React from 'react';

interface ContentTableProps {
    videos: Video[];
}

const ContentTable: React.FC<ContentTableProps> = ({ videos }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b">Картинка</th>
                    <th className="py-2 px-4 border-b">Название</th>
                    <th className="py-2 px-4 border-b">Описание</th>
                    <th className="py-2 px-4 border-b">Просмотры</th>
                    <th className="py-2 px-4 border-b">Лайки</th>
                    <th className="py-2 px-4 border-b">Дизлайки</th>
                </tr>
                </thead>
                <tbody>
                {videos.map((video) => (
                    <tr key={video.id}>
                        <td className="py-2 px-4 border-b">
                            <img src={video.cover} alt={video.tittle} className="w-24" />
                        </td>
                        <td className="py-2 px-4 border-b">{video.tittle}</td>
                        <td className="py-2 px-4 border-b">{video.description}</td>
                        <td className="py-2 px-4 border-b">{video.viewCount}</td>
                        <td className="py-2 px-4 border-b">{video.likeCount}</td>
                        <td className="py-2 px-4 border-b">{video.dislikeCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContentTable;
