"use client"

import React, {useRef, useState, useEffect, ChangeEvent, MouseEvent} from 'react';
import './player.css';
import 'tailwindcss/tailwind.css';
import {BiSolidDislike, BiSolidLike} from 'react-icons/bi';
import {MdInsertComment} from 'react-icons/md';
import {RiShareForwardFill} from 'react-icons/ri';
import {BsThreeDotsVertical} from 'react-icons/bs';


const LikeBlock = () => {


    // Render
    return (
        <div className="flex flex-col gap-7 p-2 justify-items-center items-center">
            <div>
                <BiSolidLike size={24}/>
                <label>27тыс.</label>
            </div>
            <div>
                <BiSolidDislike size={24}/>
                <label>2тыс.</label>
            </div>
            <div>
                <MdInsertComment size={24}/>
                <label>225</label>
            </div>
            <div>
                <RiShareForwardFill size={24}/>
                <label>Подели.</label>
            </div>
            <div>
                <BsThreeDotsVertical size={24}/>
                <label></label>
            </div>
        </div>
    );


};

export default LikeBlock;
