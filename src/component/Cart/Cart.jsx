import React from 'react';

const Cart = () => {
    return (
        <div className='col-span-4'>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='w-full h-96'>
                    <img className='w-full h-96' src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;