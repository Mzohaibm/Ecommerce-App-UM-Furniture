import React from 'react'
import ShopSale from './ShopSale'
import NewProducts from '../../Components/NewProducts/NewProducts'
import BestSelling from '../../Components/BestSelling/BestSelling'
import HeroSecShop from './HeroSecShop'
import ShippingCustomer from '../../Components/OtherSections/ShippingCustomer'
const Shop = () => {
    return (
        <div>
            <HeroSecShop />
            <NewProducts />
            <BestSelling />
            <ShopSale />
            <ShippingCustomer />
        </div>
    )
}

export default Shop