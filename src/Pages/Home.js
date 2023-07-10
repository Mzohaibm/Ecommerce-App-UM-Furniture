import Discount from "../Components/Discount/Discount"
// import ContextCart from "../Common/Context/ContextCart"
import FlashCard from "../Components/FlashDeals/FlashCard"
import HeroSlider from "../Components/Slider/Slider"
import React from 'react'
import Sale1 from "../Components/OtherSections/Sale1"
import ShippingCustomer from "../Components/OtherSections/ShippingCustomer"
import Testimonials from "../Components/OtherSections/Testimonials"
import Decoration from "../Components/OtherSections/Decoration"
import BestSelling from "../Components/BestSelling/BestSelling"
import NewProducts from "../Components/NewProducts/NewProducts"

const Home = () => {
    return (
        <div>
            <HeroSlider />
            <FlashCard />
            <BestSelling />
            <NewProducts />
            <Sale1 />
            <Discount />
            <Decoration />
            <Testimonials />
            <ShippingCustomer />
            {/* <ContextCart /> */}
        </div>
    )
}

export default Home