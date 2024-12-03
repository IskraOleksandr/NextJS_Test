import React, { ReactNode} from 'react';
import Sidebar from './sidebar'; // Импортируем Sidebar

interface DialogProps {
    isOpen: boolean;        // Булевое значение для открытия/закрытия диалога
    onClose: () => void;    // Функция для закрытия диалога
    onSelect: (key: string) => void;
    children: ReactNode;    // Дети — содержимое диалогового окна
}


const Dialog:React.FC<DialogProps> = ({ isOpen, onClose, onSelect, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-3/4 h-3/4 flex rounded-lg">
                {/* Sidebar находится слева */}
                <Sidebar onSelect={onSelect} />
                <div className="flex flex-col w-full">
                    {/* Кнопка для закрытия диалогового окна */}
                    <button
                        className="self-end p-2 text-red-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    {/* Основное содержимое диалогового окна */}
                    <div className="flex-grow overflow-auto p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
