"use client"

import React, { useState } from 'react';

const blocks = [
    { id: 1, text: "Блок 1", overlayText: "Я из блока 1!" },
    { id: 2, text: "Блок 2", overlayText: "Я из блока 2!" },
    { id: 3, text: "Блок 3", overlayText: "Я из блока 3!" },
];

const HoverComponent = () => {
    const [activeId, setActiveId] = useState<number|null>(null);

    const handleClick = (id:number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <>

            <div className="flex flex-col space-y-4">
                {blocks.map(block => (
                    <>
                        <div className="relative cursor-pointer" >
                            <div
                                className="w-52 h-52 bg-lightblue-500 flex items-center justify-center border border-blue-500">
                                {block.text}
                            </div>
                            {activeId === block.id && (
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-80 flex items-center justify-center border border-red-500">
                                    {block.overlayText}
                                </div>
                            )}
                        </div>
                        <button key={block.id}
                                onClick={() => handleClick(block.id)}>bbb
                        </button>
                    </>
                ))}
            </div>
        </>
    );
};

export default HoverComponent;


