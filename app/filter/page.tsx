// pages/content.js
"use client"

import {useState} from 'react';

const videoData = [
    {
        id: 1,
        title: 'My First Video',
        description: 'This is a description of my first video.',
        views: 1200,
        likes: 150,
        dislikes: 10,
        thumbnail: 'https://i.ytimg.com/vi/ndAQfTzlVjc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFQoSDAP&rs=AOn4CLD3yIfsCPW6yLCfAhC1XDI-ZydQ4g',
    },
    {
        id: 2,
        title: 'Another Great Video',
        description: 'Description of another great video.',
        views: 4500,
        likes: 300,
        dislikes: 20,
        thumbnail: 'https://i.ytimg.com/vi/ndAQfTzlVjc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFQoSDAP&rs=AOn4CLD3yIfsCPW6yLCfAhC1XDI-ZydQ4g',
    },
];

export default function ContentPage() {
    const [openFilterDialog, setOpenFilterDialog] = useState(false);
    const [filters, setFilters] = useState({
        copyright: '',
        ageRestriction: '',
        audience: '',
        access: '',
        title: '',
        description: '',
        views: '',
    });

    const handleOpenFilterDialog = () => {
        setOpenFilterDialog(true);
    };

    const handleCloseFilterDialog = () => {
        setOpenFilterDialog(false);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setFilters({...filters, [name]: value});
    };

    const applyFilters = () => {
        // Логика для применения фильтров
        console.log(filters);
        handleCloseFilterDialog();
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Контент на канале</h1>
            <button
                onClick={handleOpenFilterDialog}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Фильтр
            </button>

            {/* Таблица с видео */}
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
                    {videoData.map((video) => (
                        <tr key={video.id}>
                            <td className="py-2 px-4 border-b">
                                <img src={video.thumbnail} alt={video.title} className="w-24"/>
                            </td>
                            <td className="py-2 px-4 border-b">{video.title}</td>
                            <td className="py-2 px-4 border-b">{video.description}</td>
                            <td className="py-2 px-4 border-b">{video.views}</td>
                            <td className="py-2 px-4 border-b">{video.likes}</td>
                            <td className="py-2 px-4 border-b">{video.dislikes}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Диалог фильтрации */}
            {openFilterDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Фильтры</h2>
                        {/* Фильтры */}
                        <div className=" flex grid grid-cols-2 p-4 gap-4">
                            <div>
                                <span className="text-gray-700">Авторские права</span>
                                <select name="copyright" value={filters.copyright} onChange={handleFilterChange}
                                        className="block w-full mt-1 border-gray-300 rounded shadow-sm">
                                    <option value="">Нет</option>
                                    <option value="claimed">Заявлены</option>
                                    <option value="notClaimed">Не заявлены</option>
                                </select>
                            </div>

                            <div>
                                <span className="text-gray-700">Возрастные ограничения</span>
                                <select name="ageRestriction" value={filters.ageRestriction}
                                        onChange={handleFilterChange}
                                        className="block w-full mt-1 border-gray-300 rounded shadow-sm">
                                    <option value="">Нет</option>
                                    <option value="ageRestricted">Есть ограничения</option>
                                </select>
                            </div>

                            <div >
                                <span className="text-gray-700">Аудитория</span>
                                <select name="audience" value={filters.audience} onChange={handleFilterChange}
                                        className="block w-full mt-1 border-gray-300 rounded shadow-sm">
                                    <option value="">Любая</option>
                                    <option value="children">Детская</option>
                                    <option value="adults">Взрослая</option>
                                </select>
                            </div>

                            <div>
                                <span className="text-gray-700">Доступ</span>
                                <select name="access" value={filters.access} onChange={handleFilterChange}
                                        className="block w-full mt-1 border-gray-300 rounded shadow-sm">
                                    <option value="">Все</option>
                                    <option value="public">Открытые</option>
                                    <option value="private">Приватные</option>
                                </select>
                            </div>

                            <div >
                                <span className="text-gray-700">Название</span>
                                <input name="title" value={filters.title} onChange={handleFilterChange}
                                       className="block w-full mt-1 border-gray-300 rounded shadow-sm"/>
                            </div>

                            <div >
                                <span className="text-gray-700">Описание</span>
                                <input name="description" value={filters.description} onChange={handleFilterChange}
                                       className="block w-full mt-1 border-gray-300 rounded shadow-sm"/>
                            </div>

                            <div >
                                <span className="text-gray-700">Просмотры</span>
                                <input name="views" value={filters.views} onChange={handleFilterChange}
                                       className="block w-full mt-1 border-gray-300 rounded shadow-sm"/>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end space-x-4">
                            <button className="px-4 py-2 bg-gray-200 rounded">Сбросить фильтры</button>
                            <button onClick={handleCloseFilterDialog}
                                    className="px-4 py-2 bg-gray-200 rounded">Отмена
                            </button>
                            <button onClick={applyFilters}
                                    className="px-4 py-2 bg-blue-500 text-white rounded">Применить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
