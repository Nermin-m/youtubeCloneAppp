import React from 'react';
import dataFilter from "../assets/data/dataFilter.jsx";

function Filter({setLetter}) {
    return (
        <div className='ml-20 mt-10 flex items-center overflow-x-auto'>
            {
                dataFilter.map((data, i) => (
                    <div key={i} onClick={()=>setLetter(data.name)} className=' bg-gray-100 cursor-pointer hover:bg-gray-200 px-5 py-1 mx-2 rounded-2xl text-l text-gray-700'>
                        {data.name}
                    </div>
                ))
            }
        </div>
    );
}

export default Filter;
