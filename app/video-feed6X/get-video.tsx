import { Video } from "@/types/video.interface";


interface GetVideosParams {
    pageNumber: number;
    pageSize: number;
    specificId?: number;
}

export async function getVideos(pageNumber: number, pageSize: number, specificId?: number | null) {
    // const { pageNumber, pageSize, specificId } = params;
    //
    // const query = new URLSearchParams({
    //     pageNumber: pageNumber.toString(),
    //     pageSize: pageSize.toString(),
    //     ...(specificId !== undefined && { specificId: specificId.toString() }),
    // });

    try {
        const response = await fetch(`https://localhost:7154/Videos/getallvideoinfopaginatedwith1vbyid/${pageNumber}/${pageSize}/${specificId}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch videos: ${response.statusText}`);
        }

        const data: Video[] = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
}
