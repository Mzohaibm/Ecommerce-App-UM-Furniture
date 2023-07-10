import React from "react";
import "./Style.css"
import { Link } from "react-router-dom";

const Sale1 = () => {
    return (
        <div className="sale1_bg ">
            <div className="w-11/12 mx-auto md:py-32 sm:py-24 py-8  sale1_inner" >
                <p className="md:text-4xl text-xl font-medium">MEGA SALE UPTO 45%
                </p>
                <h1 className="md:text-6xl text-4xl font-bold py-1 md:py-3">Fancy Sofa set
                </h1>
                <p className="md:py-3 py-1 w-1/2 text-sm md:text-xl font-thiner md:font-medium">The fancy sofa set features luxurious upholstery, intricate detailing, and elegant design elements</p>
                <div className="my-5">
                    <Link to='/shop' className="border-2 border-white hover:bg-white hover:text-black ease-in md:px-6 md:py-3 px-3 py-2 rounded text-white">Shop Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Sale1
