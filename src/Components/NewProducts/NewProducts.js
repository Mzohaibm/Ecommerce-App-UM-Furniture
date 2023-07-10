import React, { useContext, useState } from "react";
import products from "./NewProductData";
import { SendCart } from "../../Common/Context/Context";
import swal from "sweetalert";
import { ThreeDots } from "react-loader-spinner";
import "./Shop.css";
import { Link } from "react-router-dom";
const NewProducts = () => {
    const { addToCart } = useContext(SendCart);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(false);
    const categories = ["bed", "cabinet", "chair", "table"];
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    const handleSelectCategory = (category) => {
        setIsLoading(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setIsLoading(false);
        }, 300);
    };

    const handleAddtoCart = (product, index) => {
        addToCart({ ...product, id: index });
        swal("Successfully", "Product Added to Cart", "success");
    };

    const handleMouseEnter = (id) => {
        setHoveredImage(id);
    };
    const handleMouseLeave = () => {
        setHoveredImage(false);
    };
    return (
        <div className="pb-12 w-11/12 mx-auto new_products">
            <h1 className="sm:text-4xl text-3xl font-medium py-5 text-center">
                Our New Products
            </h1>
            <div className="w-full lg:w-1/2 sm:w-2/3 w-4/3 mx-auto">
                <div className="grid grid-cols-4 gap-2 py-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="font-medium uppercase text-lg my-2 text-black hover:text-yellow-500"
                            onClick={() => handleSelectCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full flex">
                {isLoading ? (
                    <div className="mx-auto justify-center flex py-5">
                        <ThreeDots height={120} width={120} color="black" type="ThreeDots" />{" "}
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 grid-cols-2">
                        {filteredProducts.map((item) => {
                            const isHovered = hoveredImage === item.name;
                            return (
                                <div
                                    onMouseEnter={() => handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                    className="sm:p-5 p-3 bg-gray-100"
                                    key={item.name}
                                >
                                    <p className="bg-yellow-600 p-2 w-[90px] text-center rounded-full text-white">
                                        {item.discountPercentage}% Off
                                    </p>
                                    <Link to={`/product/new-product/${item.id}`}>
                                        {isHovered ? (
                                            <img className="h-64 mx-auto" src={item.hoveredImage} alt={item.name} />
                                        ) : (
                                            <img className="h-64 mx-auto" src={item.img} alt={item.name} />
                                        )}
                                    </Link>
                                    <h3 className="text-xl">{item.name}</h3>
                                    <div>
                                        <p className="py-2">${item.price}</p>
                                        <button
                                            onClick={() => handleAddtoCart(item, item.name)}
                                            className="bg-yellow-600 w-full text-white py-2 rounded"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                )}
            </div>
        </div>
    );
};

export default NewProducts;
