import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
const Head = () => {
  return (
    <>
      <div className="bg-yellow-600 md:block hidden text-white main_head">
        <div className="flex justify-between py-5 mx-auto w-11/12">
          <div className="left_bar flex  sm:flex-row flex-col">
            <div >
              <FontAwesomeIcon className="pr-1" icon={faPhone} />
              <a href="tel:+923024464106" className="mr-4">+92 3024464106</a>
            </div>
            <div>
              <FontAwesomeIcon className="pr-1" icon={faEnvelope} />
              <a href="mailto:Zohaibattari106@gmail.com">example@gmail.com</a>
            </div>
          </div>
          <div className="right_bar flex sm:flex-row flex-col">
            <div>
              <label className="mr-4 cursor-pointer">ThemeFAQ'S</label>
              <label className="mr-4 cursor-pointer">Need Helps</label>
            </div>
            <div>
              <label htmlFor="" className="mr-4 cursor-pointer">
                EN<span>🏳️</span>
              </label>
              <label htmlFor="" className="cursor-pointer">
                USD<span>🏳️</span>
              </label>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Head;


