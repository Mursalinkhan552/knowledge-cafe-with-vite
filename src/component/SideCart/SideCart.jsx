import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime, blogs }) => {


    const [time, setTime] = useState(watchTime);



    useEffect(() => {
        const getValueFromLocalStorage = localStorage.getItem('watchTime');
        setTime(getValueFromLocalStorage)
    }, [watchTime])


    return (
        <div className='sticky top-0'>
            <div className='border-2 px-8 py-2 bg-primary bg-opacity-20 rounded'>
                <h3 className='text-primary font-semibold'>Spent time on read : {time} min</h3>
            </div>
            <div className='my-6 p-6 shadow-2xl rounded-md'>
                <h3 className='text-xl font-bold'>Bookmarked Blogs : 8</h3>
                {blogs.map(blog => <h3 className='mt-4 border-2 p-4 rounded shadow-xl'>{blog}</h3>)}
            </div>

        </div>
    );
};

export default SideCart;