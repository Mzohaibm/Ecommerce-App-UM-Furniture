import React, { useContext, useState } from "react";
import BestSellingData from "./BestSellingData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";
import ReactStars from "react-stars";
import { SendCart } from "../../Common/Context/Context";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const BestSelling = () => {
    // const { id } = useParams()
    // const product = BestSellingData.find((item) => item.id === Number(id));
    const { addToCart } = useContext(SendCart);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    const handleAddToCart = (value, index) => {
        addToCart({ ...value, id: index });
        swal("Successfully", "Product Added to Cart", "success");
    };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        appendDots: (dots) => {
            return (
                <ul className="dots_style">
                    {dots.map((dot, index) => (
                        <li
                            className="dots rounded-full flex justify-center items-center p-0 m-0"
                            key={index}
                        >
                            {dot}
                        </li>
                    ))}
                </ul>
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                },
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                },
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                },
            }
        ]
    };
    return (
        <div className="bg-gray-100 py-20 best_selling">
            <div className="text-center pb-3">
                <h1 className="sm:text-4xl text-3xl font-medium">Our Best Selling Products</h1>
                <p className="font-medium">Visit our shop to see amazing creations from our designers.</p>
            </div>
            <div className="mx-auto w-11/12 ">
                <Slider {...settings}>
                    {BestSellingData.map((value) => {
                        const isHovered = hoveredIndex === value.id;
                        return (
                            <div key={value.id} className="mb-2">
                                <div className="sm:p-5 p-3 bg-white border-8 border-gray-100">
                                    <p className="bg-yellow-600 p-2 w-14 text-center rounded-full text-white">
                                        {value.discount}
                                    </p>

                                    <div className=" h-[220px] items-center">
                                        <Link to={`/best-selling/${value.id}`} className="product_image"
                                            onMouseEnter={() => handleMouseEnter(value.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {isHovered ? (
                                                <div className="sm:h-80  h-56">
                                                    <img className="hover_img" src={value.hoveredImage} alt={value.name} />
                                                    <button
                                                        onClick={() => handleAddToCart(value, value.id)}
                                                        className="hover_btn p-2 font-medium bg-yellow-500 hover:bg-gray-200 w-full rounded"
                                                    >
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="sm:h-80  h-56">
                                                    <img src={value.img} alt={value.name} />
                                                </div>
                                            )}
                                        </Link>
                                    </div>
                                    <p className="font-medium">{value.name}</p>
                                    <div className="flex">
                                        <p className="font-medium">${value.price}</p>
                                        <s className="text-gray-500 pl-3">${value.oldPrice}</s>
                                    </div>
                                    <div>
                                        <p className="flex items-center">
                                            <ReactStars
                                                count={5}
                                                value={5}
                                                size={24}
                                                color2={"#ffd700"}
                                            />{" "}
                                            Rating
                                        </p>
                                    </div>
                                    <p className="text-green-600">
                                        {value.delivery} Day Delivery
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default BestSelling;

