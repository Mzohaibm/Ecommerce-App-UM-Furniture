import React from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';

import dec1 from "../Assets/Decoration/dec1.jpg";
import dec2 from "../Assets/Decoration/dec2.jpg";
import dec3 from "../Assets/Decoration/dec3.jpg";

const Decoration = () => {
    const dealEndTime = new Date('2023-08-02T23:59:59');

    return (
        <div className='mx-auto w-11/12 my-10 md:my-20'>
            <div className='grid md:grid-cols-2 grid-cols-1 md:mb-0 mb-6  md:gap-20 place-items-center' >
                <div className=''>
                    <p className='text-yellow-600'>Massey Collection 2023</p>
                    <p className='text-3xl'>Contemporary Renovation for Your Living Spaces</p>
                    <p>Experience the seamless blend of functionality and beauty, where impeccable design meets your desires.</p>
                    <div className='timer py-4 '>
                        <p className='font-medium '>In just a little while, it will all be worth it</p>
                        <Timer endTime={dealEndTime} />
                    </div>
                </div>
                <div className=''>
                    <Link to="/shop">
                        <img className="w-full" src={dec1} alt='Decoration' />
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:gap-10 gap-4  md:gap-20'>
                <div className=''>
                    <Link to="/shop">
                        <img className="w-full" src={dec2} alt='Decoration' />
                    </Link>
                    <div className='pt-5'>
                        <p className='font-medium'>-Exceptional Home and Decoration Design</p>
                        <p>Presenting a collection of options, where your desires are met with impeccable service and exceptional quality.</p>
                    </div>
                </div>
                <div className=' mt-20'>
                    <Link to="/shop">
                        <img className="w-full" src={dec3} alt='Decoration' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Decoration;
