"use client"

/*
import { useState } from 'react';
import Sidebar from './sidebar';
import Dialog from './dialog';
import dynamic from 'next/dynamic';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState('page1');

    // Lazy loading for better performance
    const PageComponent = dynamic(() => import(`./${selectedPage}`), {
        ssr: false,
    });

    const handleSelect = (key:string) => {
        setSelectedPage(key);
        setIsOpen(true);
    };

    const closeDialog = () => setIsOpen(false);

    return (
        <div className="flex h-screen">
            <Sidebar onSelect={handleSelect} />
            <Dialog isOpen={isOpen} onClose={closeDialog}>
                <PageComponent />
            </Dialog>
        </div>
    );
}
*/
import { useState } from 'react';
import DialogModal from './dialog-modal';
import Dialog from './dialog';
import dynamic from 'next/dynamic';

export default function Home() {
    // Типизируем состояние диалога как булево
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [selectedPage, setSelectedPage] = useState('page1');

    // Lazy loading for better performance
    const PageComponent = dynamic(() => import(`./${selectedPage}`), {
        ssr: false,
    });

    const handleSelect = (key:string) => {
        setSelectedPage(key);
        setIsDialogOpen(true);
    };
    /*const openDialog = () => {
        setIsDialogOpen(true);
    };*/

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div>
            <h1>Next.js Dialog Example</h1>
            {/*<Sidebar onSelect={handleSelect} />
            <button onClick={openDialog}>Open Dialog</button>*/}
            <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
                <PageComponent />
            </Dialog>
            {/*<DialogModal isOpen={isDialogOpen} onClose={closeDialog} />*/}
        </div>
    );
}