import React from 'react';

function PageContainers({children}) {
    return (
        <div className='flex w-full'>
            {children}
        </div>
    );
}

export default PageContainers;
