"use client"

import React, { useState } from 'react';
import styles from './HoverComponent.module.css';

const blocks = [
  { id: 1, text: "Блок 1", overlayText: "Я из блока 1!" },
  { id: 2, text: "Блок 2", overlayText: "Я из блока 2!" },
  { id: 3, text: "Блок 3", overlayText: "Я из блока 3!" },
];

const HoverComponent = () => {
  const [hoveredId, setHoveredId] = useState<number|null>(null);

  return (
    <div className={styles.container}>
      {blocks.map(block => (
        <div 
          key={block.id}
          className={styles.block}
          onMouseEnter={() => setHoveredId(block.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className={styles.box}>
            {block.text}
          </div>
          {hoveredId === block.id && (
            <div className={styles.overlay}>
              {block.overlayText}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverComponent;
