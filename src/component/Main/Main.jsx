import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SideCart from '../SideCart/SideCart';

const Main = () => {
    const [values, setValues] = useState([]);

    useEffect(()=>{
        fetch('value.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])



    return (
        <div className='grid grid-cols-7 mx-16 gap-12'>
           <Cart></Cart> 
           <SideCart></SideCart>
        </div>
    );
};

export default Main;