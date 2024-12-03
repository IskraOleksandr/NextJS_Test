"use client"

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Dialog from './dialog';

/*export default function OpenDialogButton() {
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
            {/!* Диалоговое окно *!/}
            <Dialog isOpen={isOpen} onClose={closeDialog} onSelect={handleSelect}>
                <PageComponent />
            </Dialog>
        </div>
    );
}*/
// pages/index.tsx
// import { useState } from 'react';
// import DialogModal from '../components/DialogModal';

export default function Home() {
    // Типизируем состояние диалога как булево
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [selectedPage, setSelectedPage] = useState('page1');  // Какая страница выбрана

// Динамическая загрузка страниц
    const PageComponent = dynamic(() => import(`./${selectedPage}`), {
        ssr: false,
    });
    const handleSelect = (key:string) => {
        setSelectedPage(key);
    };
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <h1>Next.js Dialog Example</h1>
            <button onClick={openDialog}>Open Dialog</button>
            <Dialog isOpen={isDialogOpen} onClose={closeDialog}  onSelect={handleSelect}>
                <PageComponent />
            </Dialog>
        </div>
    );
}
