import React from 'react';
import moment from "moment/moment.js";

function HomeCard({ video, image }) {
    return (
        <div className='w-[300px] m-3 cursor-pointer border-2 p-3 rounded-lg' onClick={()=>window.location=`videos/${video?.id?.videoId}`}>
            <img src={video?.snippet?.thumbnails?.high?.url} alt="Video Thumbnail" />
            <div className='font-bold mt-1'>{(video?.snippet?.title).substring(0, 65)}...</div>
            <div className='text-sm mt-1'>{video?.snippet?.channelTitle}</div>
            <div className='text-xs text-gray-700 mt-1 tracking-wider space-x-4'>
                <span>{video?.statistics?.viewCount} views</span>
                <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
            </div>
        </div>
    );
}

export default HomeCard;
