import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import context from "../../Context/StateContext";
const Navbar = () => {
  const Context = useContext(context);
  const { setSignUp } = Context;
  const [ham, setHam] = useState(false);
  return (
    <div className="navbar-hero cursor-pointer  flex flex-col">
      <div className=" font-sans  relative w-100 h-16 flex mx-1 my-2 py-2">
        <div className="name py-2 px-2 flex gap-2">
          <span className="bg-red-600 w-8 text-white font-medium text-sm flex items-center justify-center rounded-full">
            P
          </span>
          <h2 className="text-xl font-bold text-red-600">Pintrest</h2>
        </div>
        <div className="hidden font-bold w-full py-2 justify-between px-2 mx-1 sm:inline-flex nav-items relative  gap-2">
          <div className="right-div relative flex gap-4 bg-white w-60 my-1">
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Today
            </h4>
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Explore
            </h4>
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Watch
            </h4>
          </div>
          <div className="left-div relative flex gap-4 w-70 bg- text-gray-400 hover:text-blackwhite my-1">
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Business
            </h4>
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              About
            </h4>
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Blog
            </h4>
            <h4 className=" w-16 rounded-xl text-base font-medium text-gray-400 hover:text-black text-center">
              Login
            </h4>
            <h4
              onClick={() => {
                setSignUp(true);
              }}
              className="bg-red-500 w-16 text-center rounded-xl text-white text-sm"
            >
              SignUp
            </h4>
          </div>
        </div>
        <div  
          className="name py-1 px-2 my-2 sm:hidden w-full  flex justify-end "
        >
          <span onClick={() => {
            setHam(!ham);
          }} className="text-2xl cursor-pointer ">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
      <div
        className={`nav-items ${
          ham ? "flex flex-col" : "hidden"
        } transition  	transition-duration: 75ms bg-gray-300 py-1 px-1 gap-1`}
      >
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          Today
        </h4>
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          Explore
        </h4>
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          Watch
        </h4>
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          Business
        </h4>
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          Blog
        </h4>
        <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
          About
        </h4>
        <div className="flex justify-between">
          <h4 className="bg-white rounded-xl text-center py-1 px-1 font-bold text-sm">
            Login
          </h4>
          <h4 onClick={() => {
                setSignUp(true);
              }}className="bg-red-500 text-white rounded-xl text-center  py-1 px-1 font-bold text-sm">
            SignUp
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
