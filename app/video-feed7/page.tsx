"use client"
// pages/video-feed/[id].tsx
import {redirect} from "next/navigation";

import { useEffect } from 'react';

const VideoPage = () => {
    // const router = useRouter();
    useEffect(() => {
        redirect('/video-feed7/0');
    }, [/*router*/]);


    return (
        <div>
            {/*<h1>Video</h1>*/}

        </div>
    );
};

export default VideoPage;

