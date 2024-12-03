// pages/content.js
'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import ContentTable from './ContentTable';
import FilterDialog from './FilterDialog';
import { Video } from '@/types/video.interface';
import { Filters } from '@/types/filters.interface';

const ContentPage = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [filters, setFilters] = useState<Filters>({
        copyright: ' ',
        ageRestriction: ' ',
        audience: ' ',
        access: ' ',
        title: ' ',
        description: ' ',
        minViews: 0
    });
    const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

    const fetchVideos = async () => {
        try {
            const response = await axios.get<Video[]>('https://localhost:7154/api/Video/getvideosbychannelidwithfilters/', {
                params: {
                    id:4,                    // Передаем id
                    copyright: filters.copyright,
                    ageRestriction: filters.ageRestriction,
                    audience: filters.audience,
                    access: filters.access,
                    title: filters.title,
                    description: filters.description,
                    minViews: filters.minViews,
                },
            });
            setVideos(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, [filters]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const applyFilters = () => {
        setIsFilterDialogOpen(false);
        fetchVideos();
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Контент на канале</h1>
            <button
                onClick={() => setIsFilterDialogOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Фильтры
            </button>

            {/* Таблица с видео */}
            <ContentTable videos={videos} />

            {/* Диалог фильтров */}
            <FilterDialog
                isOpen={isFilterDialogOpen}
                filters={filters}
                onClose={() => setIsFilterDialogOpen(false)}
                onFilterChange={handleFilterChange}
                onApplyFilters={applyFilters}
            />
        </div>
    );
};

export default ContentPage;
