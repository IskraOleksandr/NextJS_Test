"use client"

import React, { useRef, useState } from 'react';

const FileUpload = () => {
    // Создаем рефы для двух полей выбора файлов
    const [channelNickName, setChannelNickName] = useState<string>("");
    const fileInputRef1 = useRef<HTMLInputElement | null>(null);
    const fileInputRef2 = useRef<HTMLInputElement | null>(null);

    // Функция для открытия окна выбора файла для первого поля
    const handleButtonClick1 = () => {
        if (fileInputRef1.current) {
            fileInputRef1.current.click();
        }
    };

    const handleButtonClick2 = () => {
        if (fileInputRef2.current) {
            fileInputRef2.current.click();
        }
    };

    // Обработка выбранного файла для первого поля
    const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log('Выбран файл для первого поля:', file.name);
        }
    };

    // Обработка выбранного файла для второго поля
    const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inpId = event.target.id;
         alert('inpId='+inpId);//
        const file = event.target.files?.[0];
        if(inpId == "input1") {
            if (file) {
                setChannelNickName(file.name);
                console.log('Выбран файл для второго поля:', file.name);
            }else setChannelNickName("");
        }
        if(inpId == "input2") {
            if (file) {
                setChannelNickName(file.name);
                console.log('Выбран файл для второго поля:', file.name);
            }else setChannelNickName("");
        }
    };

    return (
        <div>

            <button onClick={handleButtonClick1}>Выбрать файл для первого поля</button>
            <input type="file" id="input1" ref={fileInputRef1} style={{ display: 'none' }} onChange={handleFileChange2} />

            <button className="inline-flex text-[#FFF] font-Inter text-[1rem] font-not-italic font-500 leading-normal px-[0.9375rem] py-[5px] justify-center items-center gap-[0.625rem] rounded-[0.3125rem] bg-[#0EA2DE]" onClick={handleButtonClick2}>Выбрать файл для второго поля</button>
            <input type="file" id="input2" ref={fileInputRef2} style={{ display: 'none' }} onChange={handleFileChange2} />
            <h2>{channelNickName.length != 0 && channelNickName}</h2>
        </div>
    );
};

export default FileUpload;
