// components/FilterDialog.js
import { Filters } from '@/types/filters.interface';
import React, { useState } from 'react';

interface FilterDialogProps {
    isOpen: boolean;
    filters: Filters; // Тип Filters из предыдущего примера
    onClose: () => void;
    onFilterChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onApplyFilters: () => void;
}

const FilterDialog: React.FC<FilterDialogProps> = ({ isOpen, filters, onClose, onFilterChange, onApplyFilters }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Фильтры</h2>

                <div className=" flex grid grid-cols-2 p-4 gap-4">
                    <div>
                        <span className="text-gray-700">Авторские права</span>
                        <select
                            name="copyright"
                            value={filters.copyright}
                            onChange={onFilterChange}
                            className="block w-full mt-1 border-gray-300 rounded shadow-sm"
                        >
                            <option value="">Все</option>
                            <option value="claimed">Заявлены</option>
                            <option value="notClaimed">Не заявлены</option>
                        </select>
                    </div>

                    <div>
                        <span className="text-gray-700">Возрастные ограничения</span>
                        <select
                            name="ageRestriction"
                            value={filters.ageRestriction}
                            onChange={onFilterChange}
                            className="block w-full mt-1 border-gray-300 rounded shadow-sm"
                        >
                            <option value="">Все</option>
                            <option value="ageRestricted">Есть</option>
                            <option value="none">Нет</option>
                        </select>
                    </div>

                    <div>
                        <span className="text-gray-700">Аудитория</span>
                        <select
                            name="audience"
                            value={filters.audience}
                            onChange={onFilterChange}
                            className="block w-full mt-1 border-gray-300 rounded shadow-sm"
                        >
                            <option value="">Все</option>
                            <option value="children">Дети</option>
                            <option value="adults">Взрослые</option>
                        </select>
                    </div>

                    <div>
                        <span className="text-gray-700">Доступ</span>
                        <select name="access" value={filters.access} onChange={onFilterChange}
                                className="block w-full mt-1 border-gray-300 rounded shadow-sm">
                            <option value="">Все</option>
                            <option value="public">Открытые</option>
                            <option value="private">Приватные</option>
                        </select>
                    </div>

                    <div>
                        <span className="text-gray-700">Название</span>
                        <input name="title" value={filters.title} onChange={onFilterChange}
                               className="block w-full mt-1 border-gray-300 rounded shadow-sm"/>
                    </div>

                    <div>
                        <span className="text-gray-700">Описание</span>
                        <input name="description" value={filters.description} onChange={onFilterChange}
                               className="block w-full mt-1 border-gray-300 rounded shadow-sm"/>
                    </div>

                    <div className="block">
                        <span className="text-gray-700">Просмотры (Минимум)</span>
                        <input
                            type="number"
                            name="minViews"
                            value={filters.minViews}
                            onChange={onFilterChange}
                            className="block w-full mt-1 border-gray-300 rounded shadow-sm"
                        />
                    </div>

                    <button
                        onClick={onApplyFilters}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Применить фильтры
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-2"
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterDialog;
