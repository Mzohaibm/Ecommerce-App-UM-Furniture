import React from "react";
import DiscountData from "./DiscountData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css"
const Discount = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1100,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="bg-gray-100 py-10 discount">
            <h1 className="sm:text-4xl text-3xl  pb-4 text-center font-medium">Big Discounts</h1>
            <div className="w-11/12 mx-auto py-1">
                <Slider {...settings}>
                    {DiscountData.map((item, id) => {
                        return (
                            <div key={id} className=" h-44 border-4 border-gray-100 bg-white">
                                <div className="flex p-3 items-center flex-col justify-center">
                                    <img className="w-1/2 mx-auto " src={item.img} alt="Product Image" />
                                    <div>
                                        <p className="text-xl font-normal">{item.name}</p>
                                        <p className="text-xl font-medium">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Discount;
