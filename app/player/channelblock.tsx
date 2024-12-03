"use client"

import React, {useRef, useState, useEffect, ChangeEvent, MouseEvent} from 'react';
import Image from "next/image";
import './player.css';
import 'tailwindcss/tailwind.css';
import {BiSolidDislike, BiSolidLike} from 'react-icons/bi';
import img from '../../public/icon.png'
import {MdInsertComment} from 'react-icons/md';
import {RiShareForwardFill} from 'react-icons/ri';
import {BsThreeDotsVertical} from 'react-icons/bs';


const ChannelBlock = () => {


    // Render
    return (
        <div className="flex p-2 justify-items-center items-center">
            <div className="flex flex-col justify-between">
                <div className="flex flex-row items-center">
                    <Image src={img} width={42} alt={'h'} height={42}
                           style={{minHeight: '40px'}} className="rounded-full"/>


                    {/*<FolowComponent isfolowed={isFolowed} onDelete={deleteSubscription} onAdd={addSubscription}/>*/}

                    <div className="text-white pl-3"
                         title={'newVideo'}>{'formatNumber'}
                    </div>
                    <div className="pl-4">
                        <button className="bg-red-500 text-white rounded-xl pl-3 pr-3 pt-1 pb-1">Subscribe</button>
                    </div>

                </div>
                <div className="text-white pt-2"
                     title={'newVideo'}>{'formatNumber'}
                </div>
                <div className="text-white pt-2"
                     title={'newVideo'}>#car, #apple
                </div>
            </div>
        </div>
    );


};

export default ChannelBlock;
