import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import { addToLS, getStoreBlog } from '../utilities/fakedb';


const Main = () => {
    const [values, setValues] = useState([]);
    const [watchTime, setWatchTime] = useState('');
    const [blogs, setBlogs] = useState([]);
    
    

    const handleBlogs = (value) => {   
        
        setBlogs([...blogs,value]);
        addToLS(value);
   
    }

    const handleWatchTime = (time) => {
        const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));

        if (previousWatchTime) {
            const sum = previousWatchTime + time;
            localStorage.setItem('watchTime', sum);
            setWatchTime(sum);
        }
        else {
            localStorage.setItem('watchTime', time);
            setWatchTime(time);
        }
    }

    useEffect(()=>{
        const storedBlog = getStoreBlog();
        setBlogs(storedBlog)
      },[])

    useEffect(() => {
        fetch('value.json')
            .then(res => res.json())
            .then(data => setValues(data))
    }, [])



    return (
        <div className='mx-2 md:mx-16 flex flex-col md:flex-row gap-4'>
            <div className='p-2 md:shadow-2xl'>
                {
                    values.map(singleValue => <Cart
                        singleValue={singleValue}
                        key={singleValue.id}
                        handleWatchTime={handleWatchTime}
                        handleBlogs={handleBlogs}
                    ></Cart>)
                }
            </div>
            <div className='m-2'>
                <SideCart
                    watchTime={watchTime}
                    blogs={blogs}
                ></SideCart>
            </div>
        </div>
    );
};

export default Main;