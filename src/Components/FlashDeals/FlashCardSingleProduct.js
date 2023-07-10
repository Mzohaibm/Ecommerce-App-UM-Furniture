
import React, { useContext, useState } from "react";
import FlashCardData from "./FlashCardData";
import { SendCart } from "../../Common/Context/Context";
import { useParams } from "react-router-dom";
import ShippingCustomer from "../OtherSections/ShippingCustomer";

const FlashCardSingleProduct = () => {
    const { addToCart, decreaseQty } = useContext(SendCart);
    const [count, setCount] = useState(0);
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);

    const { id } = useParams();
    const product = FlashCardData.find((item) => item.id === Number(id));

    const showDesc = () => {
        setDescription(true);
        setReviews(false);
    };

    const showReview = () => {
        setDescription(false);
        setReviews(true);
    };

    const handleAddToCart = () => {
        addToCart({ ...product, id: product.id }, count);
        setCount(0);
    };

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            // decreaseQty(product);
        }
    };

    // Check if the product is found
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="mx-auto w-11/12">
                <div>
                    <div className="flex justify-between place-items-center">
                        <div className="bg-gray-100 w-1/2 mr-10">
                            <img className="w-full" src={product.img} alt={product.name} />
                        </div>
                        <div className="w-1/2">
                            <h1 className="sm:text-4xl text-3xl pb-4 font-medium">
                                {product.name}
                            </h1>
                            <p>{product.shortDescription}</p>
                            <div className="flex">
                                <p className="text-yellow-600 font-bold text-xl">
                                    ${product.price}
                                </p>
                                {product.discount && (
                                    <s className="text-gray-500 text-lg">
                                        ${product.discount}
                                    </s>
                                )}
                            </div>
                            <div className="flex my-5">
                                <div className="mr-5 text-center flex items-center w-[100px] h-[40px] border-[1px] border-black">
                                    <button
                                        onClick={decrement}
                                        className="w-[30px] h-[40px] text-xl font-bold"
                                    >
                                        -
                                    </button>
                                    <p className="w-[40px]">{count}</p>
                                    <button
                                        onClick={increment}
                                        className="w-[30px] h-[40px] text-xl font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-[130px] h-[40px] px-3 py-2 font-medium bg-yellow-600 text-white"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div>
                                <p className="font-medium">
                                    <span className="font-normal text-gray-500">SKU:</span>
                                    {product.sku}
                                </p>
                                <p className="font-medium">
                                    <span className="font-normal text-gray-500">Categories:</span>
                                    {product.categoryName}
                                </p>
                                {product.tags && (
                                    <p className="font-medium">
                                        <span className="font-normal text-gray-500">Tags:</span>{" "}
                                        {product.tags.map((tag) => (
                                            <span className="pl-1" key={tag}>
                                                {tag}
                                            </span>
                                        ))}
                                    </p>
                                )}
                            </div>
                            <div>Share Here</div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="border-b-[1px] pb-2 border-gray-500">
                            <button
                                onClick={showDesc}
                                className="text-gray-500 font-bold  hover:text-black"
                            >
                                Description
                            </button>
                            <button
                                onClick={showReview}
                                className="text-gray-500 font-bold pl-3 hover:text-black"
                            >
                                Reviews
                            </button>
                        </div>
                        <div className="py-3">
                            {description && <div>{product.longDescription}</div>}
                            {reviews && <div>My reviews here</div>}
                        </div>
                    </div>
                </div>
            </div>
            <ShippingCustomer />
        </>

    );
};

export default FlashCardSingleProduct;




// a few issue with this code
// import FlashCardData from "./FlashCardData";
// import { SendCart } from "../../Common/Context/Context";
// import { useContext, useState } from "react";
// const FlashCardSingleProduct = () => {
//     const { addToCart, decreaseQty } = useContext(SendCart);
//     const [count, setCount] = useState(0);
//     const [description, setDescription] = useState(true);
//     const [reviews, setReviews] = useState(false)
//     const showDesc = () => {
//         setDescription(true)
//         setReviews(false)
//     }
//     const showReview = () => {
//         setDescription(false)
//         setReviews(true)
//     }
//     const handleAddToCart = (product, id) => {
//         addToCart({ ...product, id }, count);
//         setCount(0);
//     };
//     const increment = () => {
//         setCount(count + 1);
//     };
//     const decrement = (product) => {
//         if (count > 0) {
//             setCount(count - 1);
//             decreaseQty(product);
//         }
//     };
//     return (
//         <div className="mx-auto w-11/12">
//             {FlashCardData.map((product) => {
//                 return (
//                     <div key={product.id}>
//                         <div className="flex justify-between  bg-blue-500 place-items-center">
//                             <div className="bg-gray-100 w-1/2 mr-10">
//                                 <img className="w-full" src={product.img} alt={product.name} />
//                             </div>
//                             <div className="w-1/2">
//                                 <h1 className="sm:text-4xl text-3xl pb-4 font-medium">
//                                     {product.name}
//                                 </h1>
//                                 <p>{product.shortDescription}</p>
//                                 <div className="flex">
//                                     <p className="text-yellow-600 font-bold text-xl">
//                                         ${product.price}
//                                     </p>
//                                     <s className="text-gray-500 text-lg">${product.discount}</s>
//                                 </div>
//                                 <div className="flex my-5">
//                                     <div className="mr-5 text-center flex items-center w-[100px] h-[40px] border-[1px] border-black">
//                                         <button
//                                             onClick={() => decrement(product)}
//                                             className="w-[30px] h-[40px] text-xl font-bold"
//                                         >
//                                             -
//                                         </button>
//                                         <p className="w-[40px]">{count}</p>
//                                         <button
//                                             onClick={() =>
//                                                 increment(handleAddToCart(product, product.id))
//                                             }
//                                             className="w-[30px] h-[40px] text-xl font-bold"
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                     <button
//                                         onClick={() => handleAddToCart()}
//                                         className="w-[130px] h-[40px] px-3 py-2 font-medium bg-yellow-600 text-white"
//                                     >
//                                         Add To Cart
//                                     </button>
//                                 </div>
//                                 <div>
//                                     <p className="font-medium"><span className="font-normal text-gray-500">SKU:</span>{product.sku}</p>
//                                     <p className="font-medium"><span className="font-normal text-gray-500">Categories:</span>{product.categoryName}</p>
//                                     <p className="font-medium"><span className="font-normal text-gray-500">Tags:</span>
//                                         {product.tags.map((tag) => (
//                                             <span className="pl-1" key={tag}>{tag}</span>
//                                         ))}
//                                     </p>
//                                 </div>
//                                 <div>
//                                     Share Here
//                                 </div>
//                             </div>
//                         </div>
//                         {/* bottom  */}
//                         <div className="my-5">
//                             <div className="border-b-[1px] pb-2 border-gray-500">
//                                 <button onClick={showDesc} className="text-gray-500 font-bold  hover:text-black">
//                                     Description
//                                 </button>
//                                 <button onClick={showReview} className="text-gray-500 font-bold pl-3 hover:text-black" >
//                                     Reviews
//                                 </button>
//                             </div>
//                             <div className="py-3">
//                                 {description && <div>{product.longDescription}</div>}
//                                 {reviews && <div>My reviews here</div>}
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

// export default FlashCardSingleProduct;

