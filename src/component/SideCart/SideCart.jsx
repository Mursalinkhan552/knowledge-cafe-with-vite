import React, { useEffect, useState } from 'react';

const SideCart = ({ watchTime, blogs }) => {


    const [time, setTime] = useState(watchTime);
    const [values, setValues] = useState(blogs);
    const [blogList, setBlogList] = useState([]);

    // console.log(values)
    useEffect(() => {
        const getValue = localStorage.getItem('blogs');
        const newValue = JSON.parse(getValue);
        const blogValue = Object.keys(newValue);
        setBlogList(blogValue);
        setValues(newValue);
    }, [blogs])



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

                {
                    blogList.map(blogL => <h3 className='mt-4 border-2 p-4 rounded shadow-xl'>{blogL}</h3>)
                }


            </div>

        </div>
    );
};

export default SideCart;