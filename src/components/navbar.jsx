// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import images from '../assets/images/images.jsx';
import icons from '../assets/icons.jsx';
import user from '../assets/images/vector-flat-illustration-grayscale-avatar-600nw-2264922221.webp'
import {Link} from "react-router-dom";
function Navbar() {
    const [searchKey, setSearch] = useState('');

    const onkeyFunc = (e) => {
        if (e.key === 'Enter') {
            searchFunch();
        }
    };

    const searchFunch = () => {
        if (searchKey.length > 0) {
            window.location = `search/${searchKey}`;
        }
    };

    return (
        <div className='w-full flex items-center justify-between h-20 px-3'>
            <div className='w-3/12 flex items-center space-x-4'>
                <icons.menu className='icon-style' />
                <Link to={'/'}><img src={images.youtube} className='w-32 cursor-pointer'/></Link>
            </div>
            <div className='w-6/12 flex items-center space-x-4'>
                <div className=' w-3/4 flex items-center '>
                    <input
                        onKeyUp={onkeyFunc}
                        value={searchKey}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className='pl-20 outline-none p-2 h-10 flex-1'
                        placeholder='Search'
                    />
                    <div onClick={searchFunch} className='bg-gray-100 h-10 w-20 flex items-center justify-center border'>
                        <icons.search className='icon-style' />
                    </div>
                </div>
                <div className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-progress'>
                    <icons.microphone className='icon-style' />
                </div>
            </div>
            <div className='w-3/12 flex items-center justify-end space-x-4'>
                <icons.video className='icon-style' />
                <icons.notifacition className='icon-style' />
                <div className='w-10 h-10 bg-gray-200 rounded-full'>
                    <img src={user}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
