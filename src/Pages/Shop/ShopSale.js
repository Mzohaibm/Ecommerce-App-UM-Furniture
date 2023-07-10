import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"
const ShopSale = () => {
    return (
        <div className=''>
            <div className='bg-gray-100'>
                <div className='shop_sale  py-28 text-center'>
                    <div className=''>
                        <h1 className="sm:text-4xl text-2xl pb-4 text-center md:pb-10 font-medium">SALE ENDS IN 1 DAY</h1>
                        <Link className='bg-yellow-500 px-3 py-2 font-medium text-white' to="/shop">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopSale