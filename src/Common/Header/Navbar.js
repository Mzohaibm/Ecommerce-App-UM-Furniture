import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faXmark,
  faShoppingBag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Components/Assets/NavBar_Logo.png";
import { SendCart } from "../Context/Context";

const Navbar = () => {
  const { cartItem } = useContext(SendCart);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [fixedNavBar, setFixedNavBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.innerHeight <= window.scrollY;
      setFixedNavBar(isFixed);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const encodedQuery = encodeURIComponent(searchQuery);
      window.location.href = `/search?q=${encodedQuery}`;
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <nav className={`bg-gray-800 py-2 ${fixedNavBar ? "fixed top-0 w-full" : ""} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-semibold text-lg">
              <img className="md:w-36 w-28" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              to="/my-account"
            >
              My Account
            </Link>
          </div>
          <div className="flex items-end justify-end lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none p-2 rounded-md"
            >
              {mobileMenu ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex items-center">
            <div className="z-10 relative">
              <div
                onClick={toggleSearch}
                className="cart ml-3 rounded-full px-3 py-2 cursor-pointer"
              >
                {search ? (
                  <FontAwesomeIcon className="text-white" icon={faXmark} />
                ) : (
                  <FontAwesomeIcon className="text-white" icon={faSearch} />
                )}
              </div>
              {search && (
                <div className="absolute right-0 top-12 flex shadow-2xl transition-all duration-300">
                  <input
                    className="bg-gray-200 p-3 focus:outline-none"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    onClick={handleSearch}
                    className="py-3 px-4 bg-yellow-500 hover:bg-green-500"
                  >
                    <FontAwesomeIcon className="text-white" icon={faSearch} />
                  </button>
                </div>
              )}
            </div>
            <Link
              to="/my-account"
              className="rounded-full ml-3 border-l-[1px] border-gray-400 px-3 py-2"
            >
              <FontAwesomeIcon className="text-white" icon={faUser} />
            </Link>
            <Link to="/cart" className="cart ml-3 rounded-full px-3 py-2">
              <FontAwesomeIcon className="text-white" icon={faShoppingBag} />
              <span className="cartCount">
                {cartItem.length === 0 ? "" : cartItem.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* when mobile menu appears then  */}
      {mobileMenu && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/shop"
            >
              Shop
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/my-account"
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
