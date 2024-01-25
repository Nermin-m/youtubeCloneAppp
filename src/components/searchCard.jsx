import React from 'react';

function SearchCard({ search }) {
    console.log(search)
    return (
        <div className='flex space-x-2 justify-center mx-6 my-10 cursor-pointer items-center '>
            <img className='h-48  ' style={{marginRight:'30px',width:'380px'}} src={search.snippet?.thumbnails?.high?.url} alt={search.snippet?.title} />
            <div className='w-2/3 space-y-2 '>
                <div className='font-bold text-lg'>{search.snippet?.title}</div>
                <div className='text-sm flex flex-col'>
                    <span>{search.snippet?.view}</span>
                    <span>{search.snippet?.publishedAt}</span>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <div className='w-10 h-10 rounded-full bg-gray-200'>{search.snippet?.signer}</div>
                    <div className='text-gray-700'>{search.snippet?.channelTitle}</div>
                </div>
                <div className='text-gray-700 text-sm'>{search.snippet?.description}</div>
                <div>new</div>
            </div>
        </div>
    );
}

export default SearchCard;
