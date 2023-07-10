import React from "react";
import About1 from "../../Components/Assets/About/Aboutus1.png";
import work1 from "../../Components/Assets/About/work1.png";
import work2 from "../../Components/Assets/About/work2.png";
import work3 from "../../Components/Assets/About/work3.png";
import "./Style.css"
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div>
        <div className='about_bg py-28'>
          <h1 className='text-white hero_text  text-6xl md:text-8xl font-bold text-center'>About Us</h1>
        </div>
      </div>
      <div className="py-10 mx-auto w-11/12 grid md:grid-cols-2 gap-10 place-items-center">
        <div>
          <img src={About1} alt="About1" />
        </div>
        <div>
          <h1 className="text-3xl font-medium">
            We Have Everything You Need ?
          </h1>
          <p className="text-gray-500">
            Enhance your home with our comprehensive range of furniture
            essentials, including foam, beds, chairs, and more. Find all your
            furnishing needs in one place for a perfect blend of comfort and
            style.
          </p>
          <div className="my-5">
            <h1 className="text-2xl font-medium">Explore Our Offerings</h1>
            <ul className="text-gray-500 list-inside list-disc">
              <li>Stylish furniture pieces to elevate your living space</li>
              <li>
                Ergonomic chairs for comfortable seating and proper posture
              </li>
              <li>Premium quality foam for enhanced comfort and support</li>
              <li>Luxurious beds designed for a restful night's sleep</li>
              <li>Durable tables for functional and versatile use</li>
              <li>
                Elegant cabinets to add storage and organization to your home
              </li>
              <li>
                Decorative accessories for adding the perfect finishing touches
              </li>
            </ul>
          </div>
          <div>
            <Link
              className="px-3 py-2 rounded font-medium text-lg text-white bg-yellow-500 hover:bg-yellow-600"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <div className="mx-auto w-11/12 ">
          <div className="text-center mb-3">
            <h1 className="text-4xl font-bold">Our services</h1>
            <p className="w-2/3 mx-auto py-3 text-gray-500">
              Our services are exceptional, offering great affordability and
              superior quality in providing you with the best furniture options
              including beds, chairs, and foam.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6">
              <h1 className="text-xl font-medium text-yellow-500">01.</h1>
              <p className="text-xl font-medium pb-2">Tailored Designs</p>
              <p className="text-gray-500">Curate your space with uniquely crafted furniture pieces tailored to your style and preferences.</p>
            </div>
            <div className="bg-white p-6">
              <h1 className="text-xl font-medium text-yellow-500">02.</h1>
              <p className="text-xl font-medium pb-2">Custom Works</p>
              <p className="text-gray-500">Create custom furniture that perfectly complements your space, reflecting your individuality and taste.</p>
            </div>
            <div className="bg-white p-6">
              <h1 className="text-xl font-medium text-yellow-500">03.</h1>
              <p className="text-xl font-medium pb-2">Worldwide Delivery</p>
              <p className="text-gray-500">Enjoy our convenient worldwide delivery service, ensuring your furniture reaches you wherever you are.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-bold pb-5">Our Working Process</h1>
        <div className="mx-auto w-11/12 flex justify-center sm:justify-between flex-wrap sm:flex-row flex-col">
          <div className="mx-auto my-3">
            <img src={work1} alt="Working Process" />
            <p className="text-2xl text-center font-medium pt-3">Furniture Design</p>
          </div>
          <div className="mx-auto my-3">
            <img src={work2} alt="Furniture Assembly" />
            <p className="text-2xl text-center font-medium pt-3">Furniture Assembly</p>
          </div>
          <div className="mx-auto my-3">
            <img src={work3} alt="Indoor & Outdoor" />
            <p className="text-2xl text-center font-medium pt-3">Indoor & Outdoor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
