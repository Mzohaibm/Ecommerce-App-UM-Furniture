

import React, { useContext, useState } from "react";
import FlashCardData from "./FlashCardData";
import { SendCart } from "../../Common/Context/Context";
import swal from "sweetalert";
import "./Style.css"
import { Link } from "react-router-dom";

const FlashCard = () => {
  // const { id } = useParams()
  const { addToCart } = useContext(SendCart);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleAddToCart = (value, id) => {
    addToCart({ ...value, id });
    swal('Successfully', 'Product Added to Cart', 'success');
  };

  return (
    <div className="bg-gray-100 py-10 flash_deal">
      <h1 className="sm:text-4xl text-3xl pb-4 text-center font-medium">Flash Deal</h1>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between w-11/12 mx-auto">
        {FlashCardData.map((value) => {
          const isHovered = hovered === value.id;

          return (
            <div className="bg-white  rounded border sm:p-5 p-3" key={value.id}>
              <p className="bg-yellow-600 p-2 w-[80px] font-medium rounded-full text-center text-white">
                {value.discount}
              </p>
              <Link
                to={`/flash-deal/${value.id}`}
                className="hover_img"
                onMouseEnter={() => handleMouseEnter(value.id)}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? (
                  <img className="w-56 h-40 mx-auto" src={value.hoveredImage} alt="Flash Deal Products" />
                ) : (
                  <img className="w-56 h-40 mx-auto" src={value.img} alt="Flash Deal Products" />
                )}
              </Link>
              <div className="flex justify-between">
                <div>
                  <p className="text-xl font-normal">{value.name}</p>
                  <p className="text-xl font-medium">${value.price}</p>
                </div>
                <button
                  onClick={() => handleAddToCart(value, value.id)}
                  className="bg-yellow-600 px-5 border-0 text-2xl font-bold rounded text-white"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlashCard;

