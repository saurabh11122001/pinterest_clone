import React, { useContext, useEffect, useRef, useState } from "react";
import { GoDot } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";
import context from "../../Context/StateContext";
import array from "./titlearray";
const Mainhero = ({ timeline, ease }) => { 
    const Context = useContext(context);
    const { signUp, setSignUp } = Context;
    const [hasmounted, setHasmounted] = useState(true);
    const [heading, setHeading] = useState(array[0]);
    let title = useRef(null);
  let title2 = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  let img4 = useRef(null);
  let btn = useRef(null);
  let dot1 = useRef(null);
  let dot2 = useRef(null);
  let dot3 = useRef(null);
  let dot4 = useRef(null);
  let targetRef = useRef(null);
  let targetRef2 = useRef(null);
  let targetRef3 = useRef(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollUpward = () => {
    if (targetRef2.current) {
      targetRef2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setSignUp(false);
  };

  useEffect(() => {
    var i=0
   setInterval(()=>{
       if(i===4){
        i=0
       }
       else{
        setHeading(array[i])
        i=i+1
       }
    },4000)
   
    
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const elementPosi = targetRef3.current.offsetHeight;
    if (scrollPosition < elementPosi) {
      setSignUp(false);
    }
    if (signUp === true) {
      if (targetRef3.current) {
        targetRef3.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    if (hasmounted === true) {
      timeline.from(title.current, 1, {
        y: -100,
        opacity: 0,
        stagger: 0.3,
        ease: ease,
      });
      timeline.from(title2.current, 1, {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: ease,
      });
      timeline.from(
        [dot1.current, dot2.current, dot3.current, dot4.current],
        0.5,
        {
          scale: 0,
          opacity: 0,
          stagger: 0.3,
          ease: ease,
        }
      );
      timeline.from(
        [img1.current, img2.current, img3.current, img4.current],
        1,
        {
          y: 100,
          opacity: 0,
          stagger: 0.3,
          ease: ease,
        }
      );
      timeline.from(btn.current, 1, {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: ease,
      });
      timeline.from(targetRef.current, 1, {
        scale: 0,
        opacity: 0,
        stagger: 0.3,
        ease: ease,
      });
      setHasmounted(false);
    }
  }, [hasmounted, ease, timeline, signUp,setSignUp]);
 
  

  return (
    <>
      <div className="main-hero relative font-sans flex flex-col">
        <div
          ref={targetRef2}
          className="first  my-5  py-2 mx-1 h-60 sm:h-60 flex flex-col items-center gap-8"
        >
          <h1
            ref={title}
            className="text-4xl font-bold text-center sm:text-6xl sm:font-semibold "
          >
            Get your next
          </h1>
          <h1
            ref={title2}
            className={`text-4xl font-bold text-center sm:text-6xl sm:font-semibold ${heading==='chai time snacks idea'?'text-yellow-500':''}${heading === 'home decor idea' ? 'text-blue-600' : ''}
            ${heading === 'outfit idea' ? 'text-green-500' : ''}${heading === 'DIY idea' ? 'text-green-700' : ''}`} 
          >
           {heading}
          </h1>
          <div className="hover:cursor-pointer flex gap-1 sm:text-2xl">
            <span ref={dot1}>
              <GoDot className={`${heading==="chai time snacks idea"?'text-yellow-500':''}`} />
            </span>
            <span ref={dot2}>
              <GoDot className={`${heading==="home decor idea"?'text-blue-500':''}`} />
            </span>
            <span ref={dot3}>
              <GoDot  className={`${heading === 'outfit idea' ? 'text-green-500' : ''}`}/>
            </span>
            <span ref={dot4}>
              <GoDot className={`${heading === 'DIY idea' ? 'text-green-700' : ''}`}/>
            </span>
          </div>
        </div>
        <div className="second relative display flex  sm:flex-row sm:justify-center sm:gap-5 sm:h-36 ">
          <div
            ref={img1}
            className="image py-2 mx-1 my-1 sm:h-96 sm:w-36 lg:w-60 overflow-hidden"
          >
            <img
              className="rounded-xl sm:h-60  "
              src="https://images.pexels.com/photos/9027521/pexels-photo-9027521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
          <div
            ref={img2}
            className="overflow-hidden image py-2 mx-1 my-10 sm:h-96 lg:w-60 sm:w-36 "
          >
            <img
              className="rounded-xl sm:h-60 "
              src="https://images.pexels.com/photos/13041628/pexels-photo-13041628.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div
            ref={btn}
            onClick={scrollToTarget}
            className="hidden sm:inline-flex hover:cursor-pointer animate-bounce image py-4 rounded-full  mx-1 my-20  sm:h-16 sm:w-16  sm:items-center sm:justify-center   bg-orange-200 "
          >
            <h2 className="text-center">
              <FaChevronDown />
            </h2>
          </div>
          <div
            ref={img3}
            className=" overflow-hidden image py-2 mx-1 my-10 sm:h-96 lg:w-60 sm:w-36 "
          >
            <img
              className="rounded-xl sm:h-60 "
              src="https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div
            ref={img4}
            className="overflow-hidden image py-2 mx-1  my-1 sm:h-96 lg:w-60 sm:w-36"
          >
            <img
              className="rounded-xl sm:h-60 "
              src="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div
          ref={targetRef}
          className="part2 relative z-9 py-10 sm:bg-yellow-300 min-h-screen  flex flex-col  "
        >
          <div
            onClick={scrollToTarget}
            className="hidden cursor-pointer  font-semibold sm:flex items-center  h-7 my-1 justify-center"
          >
            <h1>Here's, How it Works</h1>
            <span>
              <FaChevronDown />
            </span>
          </div>
          <div className="sm:flex sm:relative sm:justify-between sm:gap-1 min-h-screen sm:h-screen py-2 px-2  ">
            <div className=" relative sm:w-full h-full grid grid-cols-2 gap-2 xs:grid-cols-1 justify-center items-center  sm:block ">
              <div className="bg-red-500 h-56 w-30   sm:h-56 sm:w-96 relative sm:left-20 sm:top-32  rounded-2xl">
                <img
                  className="h-full max-w-full rounded-2xl"
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="bg-blue-500 h-56 w-30 sm:h-96 sm:w-60 relative sm:left-40 sm:bottom-40 sm:z-50 rounded-2xl">
                <img
                  className="h-full w-full rounded-2xl"
                  src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="bg-pink-500 h-56 w-30 relative sm:absolute sm:left-52 sm:top-2 rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl"
                  src="https://images.pexels.com/photos/12081010/pexels-photo-12081010.jpeg?auto=compress&cs=tinysrgb&w=600 "
                  alt=""
                />
              </div>
              <div className="bg-pink-500 h-56 w-30 relative sm:absolute sm:left-60 sm:bottom-10 rounded-2xl">
                <img
                  className="w-full h-full rounded-2xl"
                  src="https://images.pexels.com/photos/3872373/pexels-photo-3872373.jpeg?auto=compress&cs=tinysrgb&w=600 "
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bg-gray-800 bg-opacity-75 sm:bg-yellow-300 left-0 top-0 sm:relative h-full w-full flex flex-col items-center ">
              <div className=" h-40 mx-1 w-100  flex items-center mt-10  justify-center">
                <h2 className="font-bold text-5xl sm:text-6xl text-green-300 sm:text-red-700 text-center sm:text-left">
                  Search for an idea
                </h2>
              </div>
              <div className=" py-2 w-100 h-80">
                <h2 className="sm:text-black text-white text-xl sm:text-2xl">
                  What do you want to try next? Think{" "}
                </h2>
                <h2 className="sm:text-black text-white text-xl sm:text-2xl">
                  of something you’re into—like “easy
                </h2>
                <h2 className="sm:text-black text-white text-xl sm:text-2xl">chicken dinner”—and see what you</h2>
                <h2 className="sm:text-black text-white text-xl sm:text-2xl">find.</h2>
                <h2 className="text-white cursor-pointer font-semibold bg-transparent border-solid border-2 border-indigo-500 sm:border-none sm:bg-red-700 my-10 text-base w-20 py-2 text-center mx-auto rounded-full ">
                  Explore
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="part1  relative  sm:bg-green-100 min-h-screen sm:max-h-screen sm:flex w-full gap-2 my-1 sm:my-0 ">
          <div className="absolute z-10 sm:relative bg-gray-800  bg-opacity-75 flex flex-col items-center justify-center sm:my-20 sm:mx-2 h-full sm:h-full sm:w-full sm:bg-green-100">
            <div className=" h-40 mx-1 w-100 my-1  flex items-center  sm:justify-center">
              <h2 className="font-bold text-5xl sm:text-6xl text-white sm:text-teal-600">
                Save ideas you like
              </h2>
            </div>
            <div className="w-100 h-80 py-2">
              <h2 className="text-xl sm:text-black text-white sm:text-2xl ">Collect Your Favrouite</h2>
              <h2 className="text-xl sm:text-black text-white sm:text-2xl text-center">so you can</h2>

              <h2 className="text-white cursor-pointer font-semibold bg-transparent border-2 borde-solid border-indigo-500 sm:bg-teal-600 my-10 text-base w-20 py-2 text-center mx-auto rounded-full ">
                Explore
              </h2>
            </div>
          </div>

          <div className="sm:relative  w-full h-full grid grid-cols-2 gap-2 sm:block">
            <div className="one  relative w-40 h-56 sm:w-80  sm:h-80 rounded-3xl bg-white ">
              <img
                className="h-full w-full rounded-3xl"
                src="https://images.pexels.com/photos/51311/cow-calf-cattle-stock-51311.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="one relative h-56 w-40  sm:absolute sm:w-52 sm:h-72  sm:top-0 sm:left-96 rounded-3xl bg-white ">
              <img
                className="h-full rounded-3xl"
                src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="one w-40 h-56 relative sm:absolute sm:w-40 sm:h-40 96 sm:top-68 sm:left-96 rounded-3xl bg-white ">
              <img
                className="h-full rounded-3xl"
                src="https://images.pexels.com/photos/535431/pexels-photo-535431.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="one  relative w-40 sm:w-52 h-56 sm:h-64  sm:top-8 sm:left-20 rounded-3xl bg-white ">
              <img
                className="h-full rounded-3xl"
                src="https://images.pexels.com/photos/1011629/pexels-photo-1011629.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="one left-20 relative h-52 w-40 sm:w-52 sm:h-52  sm:bottom-20 sm:left-80 rounded-3xl bg-white ">
              <img
                className="h-full rounded-3xl"
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="part2 relative z-10  bg-pink-400 max-h-screen sm:max-h-screen sm:flex sm:flex-col  ">
          <div className="sm:flex relative justify-between gap-1 h-full sm:h-screen">
            <div className="bg-white rounded-xl   relative w-full">
              <img
                className="w-full h-full rounded"
                src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="absolute bg-gray-800 bg-opacity-75 sm:bg-pink-400 h-full top-0 sm:relative w-full flex flex-col items-center ">
              <div className=" h-40 mx-1 w-100  flex flex-col items-center mt-20  justify-center">
                <h2 className="font-bold text-5xl sm:text-6xl text-white sm:text-red-700">
                  See it, make it
                </h2>
                <h2 className="font-bold  text-5xl sm:text-6xl text-white sm:text-red-700">
                  try it, do it
                </h2>
              </div>
              <div className="py-2 w-100 h-80 text-white  sm:text-red-700">
                <h2 className="text-xl sm:text-2xl">
                  The best part of pinterest is discovering{" "}
                </h2>
                <h2 className="text-xl sm:text-2xl text-center">new things and ideas</h2>
                <h2 className="text-xl sm:text-2xl text-center">around the world</h2>

                <h2 className="text-white cursor-pointer font-semibold border-solid border-2 border-indigo-500 bg-transparent sm:bg-red-700 my-10 text-base w-20 py-2 text-center mx-auto rounded-full ">
                  Explore
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={targetRef3}
          className="relative last-page min-h-screen min-w-screen bg-white  px-5"
        >
          <div className="bg-white h-52 bottom-10 rounded-3xl w-60 relative">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bg-white h-80 rounded-3xl w-80 relative">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="hidden sm:block bg-white h-96 rounded-3xl w-60 absolute top-32 left-96">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bg-white h-80 rounded-3xl w-60 absolute top-5 right-96">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/793785/pexels-photo-793785.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className=" bg-white h-36 rounded-3xl w-52 absolute  right-96 bottom-5">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bg-white h-36 rounded-3xl w-52 absolute  right-36  top-5">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="bg-white h-80 rounded-3xl w-80 absolute  right-5  top-52">
            <img
              className="w-full h-full rounded-3xl"
              src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="absolute  left-0 top-0 h-full sm:flex  w-full bg-gray-800 bg-opacity-75 py-2 px-2">
            <div className=" w-full h-full flex flex-col items-center gap-20 justify-center">
              <div className="signupheading">
              <h1 className="sm:text-6xl text-5xl font-bold text-white ">Sign up to get</h1>
              <h1 className="sm:text-6xl text-5xl font-bold text-white">your ideas</h1>
              </div>
              <div className=" sm:hidden flex gap-2 animate-bounce justify-center items-center"><h2 className="text-white">scroll down</h2><FaChevronDown className="text-white"/></div>
            </div>
            <div
              onClick={scrollUpward}
              className="upbtn cursor-pointer  flex items-center justify-center absolute bg-white h-20 animate-bounce w-20 top-12 left-10 rounded-full"
            >
              <h2 className="text-xl">
                <MdOutlineArrowUpward />
              </h2>
            </div>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="bg-white rounded-2xl w-96 h-full py-20 px-10 flex flex-col gap-7">
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-medium">Welcome to Pinterest</h1>
                  <h4>Find new ideas to try</h4>
                </div>
                <div className=" h-full flex flex-col gap-4 py-2 px-2">
                  <div className="email">
                    <h5 className="font-medium text-sm px-1">Email</h5>
                    <input
                      className="outline-indigo-500 border-solid border-2 border-gray-300 rounded-lg h-10 w-full px-2"
                      type="text"
                      name=""
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="passowrd">
                    <h5 className="font-medium text-sm px-1">Password</h5>
                    <input
                      className="outline-indigo-500 border-solid border-2 border-gray-300rounded-lg h-10 w-full px-2"
                      type="password"
                      name=""
                      id="pass"
                      placeholder="Create New password"
                    />
                  </div>
                  <div className="dob">
                    <h5 className="font-medium text-sm px-1">Birthdate❕</h5>
                    <input
                      className="outline-indigo-500 border-solid border-2 border-gray-300 rounded-lg h-10 w-full px-2"
                      type="date"
                    />
                  </div>
                  <div className="cursor-pointer btnns flex flex-col gap-1 items-center">
                    <h1 className="text-xs sm:text-base bg-red-600 text-center rounded-lg text-white font-medium h-8 w-36 sm:w-full py-1">
                      Continue
                    </h1>
                    <h1 className="text-xs sm:text-base bg-white text-center w-8 h-8 py-1 font-medium  rounded-full">
                      OR
                    </h1>
                    <h1 className="text-xs sm:text-base bg-blue-600 text-center rounded-lg text-white font-medium h-8 w-36 sm:w-full py-1">
                      Continue with facebook
                    </h1>
                    <h1 className="text-xs sm:text-base bg-gray-300 text-center rounded-lg text-black font-medium h-8 w-36 sm:w-full py-1">
                      Continue with google
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer w-full bg-gray-300 h-5">
          <h1 className="text-center text-sm ">@copyright by pinetrest.com</h1>
        </div>
      </div>
    </>
  );
};

export default Mainhero;
