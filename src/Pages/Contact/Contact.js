import React from "react";
import "./Style.css";
import ShippingCustomer from "../../Components/OtherSections/ShippingCustomer";
const Contact = () => {
    return (
        <div className="">
            <div className=" py-28 contact text-center text-white">
                <div className="hero_inner">
                    <p className="text-xl">Get in touch with UM Furniture</p>
                    <h1 className="py-4 md:text-6xl text-4xl">How Can We Help You?</h1>
                    <p className="font-medium">
                        Let us introduce the UM Furniture to you briefly, so you will have a
                        better understanding of our quality
                    </p>
                </div>
            </div>
            <div className="py-10 mx-auto w-11/12 grid md:grid-cols-2 md:gap-6 place-items-center">
                <div className="md:my-0 my-5">
                    <div className="mb-8">
                        <p className="text-3xl font-bold">Showroom & Store</p>
                        <p className="text-gray-500 sm:w-2/3">
                            Let us introduce the UM Furniture to you briefly, so you will have a
                            better understanding of our quality
                        </p>
                    </div>
                    <div>
                        <p className="text-md text-gray-400">Opening Hours</p>
                        <p className="text-lg font-medium">Monday - Friday : 9am - 7pm</p>
                        <p className="text-lg font-medium">Weekend Closed</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <div>
                            <p className="text-md text-gray-400">Address</p>
                            <p className="text-lg font-medium">
                                Germany — 785 15h Street, Office 478/B Green Mall Berlin, De
                                81566
                            </p>
                        </div>
                        <div>
                            <p className="text-md text-gray-400">Showroom</p>
                            <p className="text-lg font-medium">
                                Germany — 785 15h Street, Office 478/B Green Mall Berlin, De
                                81566
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                        <div>
                            <p className="text-md text-gray-400">Phone Number</p>
                            <a href="tel:+923024464106" className="text-lg font-medium">
                                +92 3024464106
                            </a>
                        </div>
                        <div>
                            <p className="text-md text-gray-400">Phone Number</p>
                            <a href="mailto:Zohaibattari106@gmail.com" className="text-lg font-medium">
                                Zohaibattari106@gmail.com
                            </a>
                        </div>

                    </div>
                </div>
                <div className="md:my-0 my-5">
                    <div className="mb-5">
                        <p className="text-3xl font-bold py-2">Get in Touch</p>
                        <p className="text-gray-500">
                            Feel free to get in touch with UM Furnitures for any inquiries or
                            assistance regarding furniture. Our dedicated team is here to help
                            you find the perfect pieces for your home or office. Contact us
                            today!
                        </p>
                    </div>
                    <div className="">
                        <form>
                            <div className="my-3 flex justify-between">
                                <div className="w-1/2 mr-2">
                                    <p>Your name *</p>
                                    <input
                                        className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="w-1/2 ml-2">
                                    <p>Your email *</p>
                                    <input
                                        className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                                        required
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="my-3">
                                <p>Subject *</p>
                                <input
                                    className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                                    required
                                    type="text"
                                />
                            </div>
                            <div className="my-3">
                                <p>Your Message *</p>
                                <textarea
                                    className="mt-1 border-[1px] border-gray-400 hover:border-black rounded w-full p-3 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 font-medium"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <p className="text-3xl py-5 font-bold text-center">Find Here</p>
                <div class="w-full bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-52 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                    <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div class="lg:w-1/3 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a class="text-indigo-500 leading-relaxed" href="mailto:Zohaibattari106@gmail.com">Zohaibattari106@gmail.com</a>
                            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <a class="leading-relaxed" href="tel:+923024464106">+92 3024464106</a>

                        </div>
                    </div>
                </div>

            </div>
            <ShippingCustomer />
        </div>
    );
};

export default Contact;
