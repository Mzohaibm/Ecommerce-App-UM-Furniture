import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "./SliderData";
import "./Slider.css";
import { Link } from "react-router-dom";
const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // appendDots: (dots) => {
        //     return (
        //         <ul className="dots_style">
        //             {dots.map((dot, index) => (
        //                 <li className="dots rounded-full flex justify-center items-center p-0 m-0" key={index}>{dot}</li>
        //             ))}
        //         </ul>
        //     );
        // },
        // appendDots: (dots) => {
        //     return <ul className="bg-green-400 text-green-600" style={{ margin: "0px", color: "yellow" }}>{dots}</ul>;
        // },
    };
    return (
        <div className="home_hero my-5">
            <div className="home_hero mx-auto w-11/12 py-10">
                <Slider {...settings}>
                    {SliderData.map((value, index) => {
                        return (
                            <div
                                className=" slider_container "
                                key={index}
                            >
                                <div className="flex sm:flex-row flex-col items-center justify-between">
                                    <div className="sm:w-1/2 w-full">
                                        <h1 style={{ lineHeight: "1.2" }} className="md:text-6xl text-4xl  font-bold">{value.title}</h1>
                                        <p className="font-normal py-5">{value.desc}</p>
                                        <div className="mt-5">
                                            <Link to="/shop" className="border-2 border-black text-black text-2xl px-5 py-2 hover:text-white hover:bg-black rounded">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2 w-full">
                                        <Link to="/shop"><img className="w-full" src={value.img} alt="Product" /></Link>
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

export default HeroSlider;


