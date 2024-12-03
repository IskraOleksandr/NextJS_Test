// components/DialogModal.js
"use client"

import { useRef, useEffect } from 'react';

// Определяем типы для пропсов
interface DialogModalProps {
    isOpen: boolean; // Состояние, открыт ли диалог
    onClose: () => void; // Функция для закрытия диалога
}

const DialogModal: React.FC<DialogModalProps> = ({ isOpen, onClose }) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (isOpen && dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal(); // Открыть модальное окно
        }
    }, [isOpen]);

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); // Закрыть модальное окно
        }
        onClose(); // Вызов колбэка для изменения состояния родителя
    };

    return (
        <dialog ref={dialogRef} onClose={closeDialog}>
            <p>Content of the dialog.</p>
            <button onClick={closeDialog}>Close</button>
        </dialog>
    );
};

export default DialogModal;