import React, { useContext } from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { SendCart } from './Context';
const ContextCart = () => {
    const { cartItem, addToCart, decreaseQty, RemoveItem } = useContext(SendCart);
    const TotalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);
    const remove = (item) => {
        RemoveItem(item);
    }
    return (
        <div className="flex md:flex-row flex-col justify-between w-11/12 mx-auto">
            <div className="md:w-3/4 w-full md:pr-5">
                <div className="flex justify-between mb-3">
                    <h1 className="text-2xl font-normal">Cart</h1>
                    <h1 className="text-2xl font-normal">{cartItem.length} Items</h1>
                </div>
                <hr />
                <div className="flex my-5">
                    <h2 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h2>
                    <h2 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Quantity</h2>
                    <h2 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Price</h2>
                    <h2 className="font-semibold text-gray-600 text-xs uppercase w-1/5">Total</h2>
                </div>
                {/* Display cart items */}
                {cartItem.map((item) => (
                    <div key={item.id} className="flex items-center my-3">
                        <div className="w-2/5">
                            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover" />
                            <div>
                                <h3 className="text-base font-medium">{item.name}</h3>
                                <p className="text-xs text-gray-500">Category: {item.category}</p>
                            </div>
                            <button onClick={() => remove(item)} className='text-xl font-medium hover:text-red-700'>Remove</button>
                        </div>
                        <div className="w-1/5 flex items-center">
                            <button
                                className="hover:bg-yellow-400 px-2 py-1 bg-gray-300 rounded"
                                onClick={() => decreaseQty(item)}
                            >
                                -
                            </button>
                            <span className="mx-2">{item.qty}</span>
                            <button
                                className="hover:bg-green-700 hover:text-white px-2 py-1 bg-gray-300 rounded"
                                onClick={() => addToCart(item)}
                            >
                                +
                            </button>
                        </div>
                        <p className="w-1/5">${item.price}</p>
                        <p className="w-1/5">${item.qty * item.price}</p>
                    </div>
                ))}
                <Link to="/shop" className="flex items-center mt-5">
                    <FontAwesomeIcon icon={faChevronLeft} className="mr-1" />
                    <span className="text-normal font-normal">Continue Shopping</span>
                </Link>
                <div className="my-5">
                    <h1 className="py-2 text-2xl font-normal">Cart Note</h1>
                    <textarea className="border-2 rounded border-black w-full pt-2 pl-2" placeholder="Special Instructions for seller" />
                </div>
            </div>
            <div id="summary" className="md:w-1/4 w-full md:pl-5">
                <h1 className="text-2xl font-normal mb-3">Order Summary</h1>
                <hr />
                <div className="flex justify-between py-5">
                    <span className="font-semibold text-sm uppercase">Items</span>
                    <span className="font-semibold text-sm uppercase">{cartItem.length}</span>
                </div>
                <div className="flex justify-between py-5">
                    <span className="font-semibold text-sm uppercase">Total Cost</span>
                    <span className="font-semibold text-sm uppercase">${TotalPrice}</span>
                </div>
                <Link to="/checkout">
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ContextCart;