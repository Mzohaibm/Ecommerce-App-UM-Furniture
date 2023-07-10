import React from "react";
import "./Style.css";
const MyAccount = () => {
  return (
    <div>
      <div className="my_account py-28">
        <h1 className="text-white hero_text  text-6xl md:text-8xl font-bold text-center">
        My account
        </h1>
      </div>
      <div className="mx-auto my-20  w-11/12 items-center grid md:grid-cols-2 md:gap-12 sm:gap-8 grid-cols-1">
        <div className="md:my-0 my-5  ">
          <div className="mb-5">
            <h1 className=" hero_text  text-4xl md:text-6xl font-medium">
              Login
            </h1>
          </div>
          <div className="">
            <form>
              <div className="my-3 flex justify-between"></div>
              <div className="my-3">
                <p className="font-medium">Username or email address *</p>
                <input
                  className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                  required
                  type="text"
                />
              </div>
              <div className="my-3">
                <p className="font-medium">Password *</p>
                <input
                  className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                  required
                  type="password"
                />
              </div>
              <div>
                <input id="remember" type="checkbox" />
                <label htmlFor="remember" className="pl-2 font-medium">Remember me</label>
              </div>
              <div className="my-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white hover:bg-yellow-600 font-medium"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* left side  */}
        <div className="md:my-0 my-5  ">
          <div className="mb-5">
            <h1 className=" hero_text  text-4xl md:text-6xl font-medium">
              Register
            </h1>
          </div>
          <div className="">
            <form>
              <div className="my-3 flex justify-between"></div>
              <div className="my-3">
                <p className="font-medium">Email address *</p>
                <input
                  className="mt-1 border-[1px] border-gray-400 hover:border-black rounded focus:outline-none p-3 w-full"
                  required
                  type="email"
                />
              </div>
              <div>
                <p className="text-gray-500 font-normal">An email containing a secure password reset link will be dispatched to the email address provided.

                  Rest assured that your personal information will be securely utilized to enhance your overall browsing experience on this website. It will be employed for managing your account access and fulfilling other necessary purposes as outlined in our privacy policy.
                </p>
              </div>
              <div className="my-3">
                <button
                  type="submit"
                  className="w-full py-3  bg-black text-white hover:bg-yellow-600 font-medium"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
