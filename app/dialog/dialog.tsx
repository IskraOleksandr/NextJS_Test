import React, { ReactNode } from 'react';
interface DialogProps {
    isOpen: boolean;        // Булевое значение для открытия/закрытия диалога
    onClose: () => void;    // Функция для закрытия диалога
    children: ReactNode;    // Дети — содержимое диалогового окна
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-3/4 h-3/4 flex">
                <div className="flex flex-col w-full">
                    <button
                        className="self-end p-2 text-red-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                    <div className="flex-grow overflow-auto p-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
