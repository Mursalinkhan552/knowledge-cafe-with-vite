import React from 'react';

const Cart = (props) => {
    const { author, cover, author_img, hashtags, posted_date, reading_time, title } = props.singleValue;
    
    
    
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-2">
                <figure className='w-full h-96'>
                    <img className='w-full h-96' src={cover} alt="Album" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img className='w-16 h-16' src={author_img} alt="" />
                            <span className='ms-6'>
                                <h2>{author}</h2>
                                <p>{posted_date}</p>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <p className='text-xl font-semibold opacity-70'>{reading_time} min read</p>
                            <span onClick={()=>props.handleBlogs(title)} className='ms-8 cursor-pointer text-primary'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" />
                                </svg>

                            </span>
                        </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p className='text-base-400 opacity-50'> <span className='mr-6'>#{hashtags[0]}</span>  #{hashtags[1]}</p>

                    <a onClick={()=>props.handleWatchTime(reading_time)} className='text-secondary underline font-semibold' href="">Mark as read</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;