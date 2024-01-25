import React from 'react';
import dataSide from "../assets/data/dataSide.jsx";
import {Link} from "react-router-dom";

function SideBar() {
    return (
        <Link to={'/'}>
        <div className='max-w-[300] space-y-3 mt-10 h-screen border-r '>
            {dataSide.map((data, i) => (
                <div key={i} className='  max-w-[300] flex items-center space-x-5 hover:bg-gray-200 cursor-pointer p-4 pr-10'>
                    <span>{data.icon}</span>
                    <span>{data.name}</span>
                </div>
            ))}

        </div>
        </Link>
    );
}

export default SideBar;
