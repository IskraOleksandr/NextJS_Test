"use client"

import React, { useState } from 'react';

const data = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
];

const filtersList = [
    { id: 1, name: 'Фильтр 1' },
    { id: 2, name: 'Фильтр 2' },
    { id: 3, name: 'Фильтр 3' },
    { id: 4, name: 'Фильтр 4' },
    { id: 5, name: 'Фильтр 5' },
    { id: 6, name: 'Фильтр 6' },
    { id: 7, name: 'Фильтр 7' },
];

const Filterstt = () => {
    const [filters, setFilters] = useState<number[]>([]);
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilterList = () => {
        setShowFilters(!showFilters);
    };

    const addFilter = (filterId: number) => {
        if (!filters.includes(filterId)) {
            setFilters([...filters, filterId]);
        }
    };

    const removeFilter = (filterId: number) => {
        setFilters(filters.filter(id => id !== filterId));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">Данные</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={toggleFilterList}
            >
                {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
            </button>

            {showFilters && (
                <div className="mt-2 flex flex-col w-max">
                    {filtersList.map(filter => (
                        <button
                            key={filter.id}
                            className="m-1 bg-gray-200 px-0 py-0 rounded"
                            onClick={() => addFilter(filter.id)}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>
            )}

            <div className="mt-4">
                <h2 className="text-lg font-bold">Выбранные фильтры:</h2>
                <div className="flex flex-wrap">
                    {filters.map(filterId => {
                        const filter = filtersList.find(f => f.id === filterId);
                        return (
                            <div key={filterId} className="m-1 bg-green-300 px-2 py-1 rounded flex items-center">
                                {filter?.name}
                                <button
                                    className="ml-2 text-red-500"
                                    onClick={() => removeFilter(filterId)}
                                >
                                    Удалить
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            <table className="min-w-full mt-4 border">
                <thead>
                <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Имя</th>
                    <th className="border px-4 py-2">Возраст</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Filterstt;