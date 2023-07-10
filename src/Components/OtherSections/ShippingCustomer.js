import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const ShippingCustomer = () => {
    return (
        <div className="my-10">
            <div className="border-t-[0.5px] border-t-gray-500  py-5 mx-auto w-11/12 flex justify-between flex-wrap">
                <div className="my-3 flex items-center w-full md:w-auto">
                    <FontAwesomeIcon className="font-thin text-4xl" icon={faTruckFast} />
                    <div className="ml-5">
                        <h1 className="text-xl font-medium">Free Shipping Orders $60+</h1>
                        <p className="font-normal">A delivery service you can depend on</p>
                    </div>
                </div>
                <div className="my-3 flex items-center w-full md:w-auto">
                    <FontAwesomeIcon className="font-thin text-4xl" icon={faPhoneVolume} />
                    <div className="ml-5">
                        <h1 className="text-xl font-medium">Customer Support</h1>
                        <p className="font-normal">Satisfied customers are our best ads</p>
                    </div>
                </div>
                <div className="my-3 flex items-center w-full md:w-auto">
                    <FontAwesomeIcon className="font-thin text-4xl" icon={faShieldHalved} />
                    <div className="ml-5">
                        <h1 className="text-xl font-medium">100% Secure Payments</h1>
                        <p className="font-normal">The highest level of security</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShippingCustomer;
