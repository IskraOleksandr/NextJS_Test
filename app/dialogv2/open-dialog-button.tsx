"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Dialog from './dialog';

export default function OpenDialogButton() {
    const [isOpen, setIsOpen] = useState(false);  // Открыто или закрыто диалоговое окно
    const [selectedPage, setSelectedPage] = useState('page1');  // Какая страница выбрана

    // Динамическая загрузка страниц
    const PageComponent = dynamic(() => import(`./${selectedPage}`), {
        ssr: false,
    });

    const handleSelect = (key:string) => {
        setSelectedPage(key);
    };

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <div className="flex h-screen justify-center items-center">
            <button className="bg-blue-500 text-white p-4 rounded"
                    onClick={openDialog} >Open Dialog</button>
            {/* Диалоговое окно */}
            <Dialog isOpen={isOpen} onClose={closeDialog} onSelect={handleSelect}>
                <PageComponent />
            </Dialog>
        </div>
    );
}
