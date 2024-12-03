import React from 'react';

interface SidebarProps {
    onSelect: (key: string) => void;  // Функция, принимающая строку и ничего не возвращающая
}
const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
    const menuItems = [
        { name: 'Page 1', key: 'page1' },
        { name: 'Page 2', key: 'page2' },
        { name: 'Page 3', key: 'page3' },
        { name: 'Page 4', key: 'page4' },
        { name: 'Page 5', key: 'page5' },
        { name: 'Page 6', key: 'page6' },
    ];

    return (
        <div className="w-1/4 bg-gray-800 text-white h-full">
            <ul className="space-y-4 p-4">
                {menuItems.map((item) => (
                    <li
                        key={item.key}
                        className="cursor-pointer hover:bg-gray-600 p-2 rounded"
                        onClick={() => onSelect(item.key)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
