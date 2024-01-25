import React from 'react';
import ReactPlayer from "react-player";
import icons from "../assets/icons.jsx";
// eslint-disable-next-line react/prop-types
function DetailCard({ video }) {
    return (
        <div className="max-w-[1000px] mx-auto my-8 ml-10 " style={{marginLeft:'300px'}}>
            <div className='w-full'>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${video?.id}`}
                width="100%"
                height="630px"
                controls={true}

            />
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mt-1">{video?.snippet?.title}</h2>
                <p className="text-gray-600 mt-2">{video?.snippet?.channelTitle}</p>
            </div>
            <div>
                <span className='text-sm mr-6'>{video?.statistics?.viewCount} Views</span>
                <span className='text-sm italic'>{video?.snippet?.publishedAt} Views</span>
            </div>
            <div className='text-gray-700 mt-2 text-sm'>
                {(video?.snippet?.description).substring(0, 200)}
            </div>
            <div className='mt-2 text-sm text-blue-700'>
                {video?.snippet?.tags?.map((tag, i) => (
                    <span key={i}>#{tag} </span>
                ))}
            </div>
            <div className='flex items-center space-x-4 mt-4'>
                <span className='flex items-center '><icons.like className='text-blue-700 mr-2 hover:text-xl'/>
                    {video?.statistics?.likeCount}</span>
                <span className='flex items-center'><icons.dislike className='text-blue-700 mr-2 hover:text-xl'/>
                    {video?.statistics?.likeCount}</span>
            </div>
        </div>
    );
}

export default DetailCard;
