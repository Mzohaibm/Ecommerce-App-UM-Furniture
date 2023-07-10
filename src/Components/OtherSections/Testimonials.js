import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testi1 from "../Assets/Testimonials/avatar-2.jpg";
import Testi2 from "../Assets/Testimonials/avatar-3.jpg";
import Testi3 from "../Assets/Testimonials/avatar.jpg";
// import "./Style.css"
const TestimonialsData = [
    {
        id: 1,
        name: "Jane Doe",
        designation: "Designer",
        avatar: Testi1,
        text: "I absolutely love the furniture from your website! The chairs, tables, and cabinets are not only stylish but also incredibly comfortable. As a designer, I appreciate the attention to detail and the high-quality craftsmanship. Your furniture has transformed my clients' spaces into stunning and functional environments.",
    },
    {
        id: 2,
        name: "Teresa Holland",
        designation: "Developer",
        avatar: Testi2,
        text: "Being a developer, I spend long hours at my desk. Thanks to your ergonomic chairs, I can now work comfortably for extended periods without any back pain or discomfort. Your furniture collection combines both aesthetics and functionality, making it the perfect choice for anyone seeking a productive and stylish workspace.",
    },
    {
        id: 3,
        name: "Allen Smith",
        designation: "Artist",
        avatar: Testi3,
        text: "Your furniture pieces are a work of art in themselves! As an artist, I have a keen eye for design, and I must say that your chairs, tables, and cabinets are true masterpieces. The unique blend of textures, colors, and materials adds a touch of sophistication to my studio. It's a pleasure to work surrounded by such beautiful furniture.",
    },
    {
        id: 4,
        name: "Teresa Holland",
        designation: "Developer",
        avatar: Testi2,
        text: "Being a developer, I spend long hours at my desk. Thanks to your ergonomic chairs, I can now work comfortably for extended periods without any back pain or discomfort. Your furniture collection combines both aesthetics and functionality, making it the perfect choice for anyone seeking a productive and stylish workspace.",
    },
];

const Testimonials = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        // appendDots: (dots) => {
        //     return <ul style={{ margin: "0px", background: "red", color: "white" }}>
        //         {dots}
        //     </ul >
        // },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };



    return (
        <div className="bg-gray-100 text-center py-20">
            <div className="mx-auto w-11/12 ">
                <div className="pb-5">
                    <h1 className="sm:text-4xl text-3xl font-medium">Our Lucky Customers</h1>
                    <p className="font-normal py-1">
                        Visit our shop to see amazing creations from our designers.
                    </p>
                </div>
                <Slider {...settings}>
                    {TestimonialsData.map((item) => {
                        return (
                            <div key={item.id} className="testimonials text-center">
                                <div className="mx-2 bg-white h-80 rounded px-2">
                                    <h2 className="text-xl font-medium">{item.name}</h2>
                                    <p className="text-normal">{item.designation}</p>
                                    <div className="flex flex-col items-center">
                                        <img
                                            className="rounded-full w-1/4 h-1/4"
                                            src={item.avatar}
                                            alt={item.name}
                                        />
                                    </div>
                                    <p className="font-normal">{item.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
