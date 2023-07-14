import { logo } from "../../public/images";
import { Route, Router, NavLink } from "react-router-dom";

import "../styles/navStyle.css";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { openCart,selectTotalQuantity } from "../Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";


const Header = ({showMenu}) => {
  const [searchBar, setSearchBar] = useState(false);
  const [navbg, setNavbg] = useState(false);
  const [getWidth, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  let totalQuantity = useSelector(selectTotalQuantity)

  const checkScrollHight = () => {
    if (scrollY > 40) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("scroll", () => {
      return checkScrollHight();
    });
    return () => {
      checkScrollHight();
    };
  }, [getWidth]);

  if (getWidth > 640) {
    return (
      <div
        className={` top-0 left-0 z-20 fixed  drop-shadow-lg border-none transitionTheme font-medium w-full flex justify-between items-center text-lg px-10 
    ${navbg &&'backdrop-blur-xl drop-shadow-3xl bg-white/50 border-b-4'}`}
      >
        <div className="logo mx-10">
          <img src={logo} alt="logo_img" className="w-20" />
        </div>
        <nav className="flex w-[40%] justify-between items-center text-slate-800">
          <NavLink to="/">Home</NavLink>
          <span className="cursor-pointer group flex items-center gap-1 z-20 relative products ">
            <div className="">
              Products
              <ul className=" hidden absolute group-hover:flex   gap-5 mt-1   py-1 px-5 border-none drop-shadow-xl">
                <li>
                  <NavLink to="/all_fabrics">Fabrics</NavLink>
                </li>
                <li>
                  <NavLink to="/all_bags">bags</NavLink>
                </li>
                <li>
                  <NavLink to="/all_cuffLink">cuff_Link</NavLink>
                </li>
              </ul>
            </div>

            <RiArrowDropDownLine size={30} />
          </span>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/footer">Contact us</NavLink>
        </nav>
        <nav className="flex container w-fit z-[100] justify-between top-5 px-[3rem]] m-auto ">
        <ul className="flex gap-3 ">

          <li>
            <HeartIcon
              className={`w-6  text-slate-900 hover:scale-125 transition-theme cursor-pointer ${
                navbg && "text-slate-900"
              }`}
            />
          </li>
          <li className="relative">
            <button type="button" onClick={()=>{dispatch(openCart())}}>
              <ShoppingBagIcon
                className={`w-6  text-slate-900 hover:scale-125 transition-theme cursor-pointer ${
                  navbg && "text-slate-900"
                }`}
              />
            </button>
            
            <span className="text-slate-800 bg-slate-100 w-[1.2rem] h-[1.2rem]   text-sm grid items-center justify-center rounded-[50%] absolute -bottom-2 -right-2">
              {totalQuantity }
            </span>
          </li>
        </ul>
      </nav>
        <div
          className={` searchBar  relative  rounded-full drop-shadow-md max-w-sm w-[40em] ${
            !searchBar && ""
          }`}
        >
          <div
            className={`w-full absolute searchBar h-full  right-0 flex items-center ${
              !searchBar && "w-[10%] "
            }`}
          >
            <input
              type="text"
              placeholder="search item....."
              className={`outline-none searchBar px-2 absolute right-4  transitionTheme border-none w-[90%] h-10 rounded-l-lg   ${
                !searchBar && " w-[0]  absolute right-0 h-[0] rounded-sm  "
              }`}
            />
            <button
              className={` p-1 absolute  bg-[#dc2626] searchBar rounded-r-full  w-10 h-10 grid justify-center items-center  right-0  ${
                !searchBar &&
                "rounded-r-full rounded-l-full grid justify-center items-center  "
              }`}
              onClick={() => setSearchBar(!searchBar)}
            >
              <CiSearch
                className="hover:scale-[95%] searchBar"
                size="1.8rem"
                color="#ffff"
              />
            </button>
          </div>
        </div>
      </div>
    );
  } 
  else if (getWidth <= 640){
    return (
    
      <div className="bg-black z-100">
        {
          !showMenu &&(
            <div
            className={`absolute bg-slate-900 h-full  opacity-95 overflow-hidden top-0 left-0 z-20 font-medium w-full text-3xl px-10 
            `}
            >
            <div className="logo">
              <img src={logo} alt="logo_img" className="w-20" />
            </div>
            <nav className="grid gap-20 justify-between items-center text-white">
              <NavLink to="/">Home</NavLink>
              <span className="group ">
                <div className="">
                  Products
                  <ul className=" hidden absolute group-hover:flex   gap-5 mt-1   py-1 px-5 border-none drop-shadow-xl">
                    <li>
                      <NavLink to="/all_fabrics">Fabrics</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all_bags">bags</NavLink>
                    </li>
                    <li>
                      <NavLink to="/all_cuffLink">cuff_Link</NavLink>
                    </li>
                  </ul>
                </div>
              </span>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/footer">Contact us</NavLink>
            </nav>
          </div>
          )
        }



      </div>
    );
  }
};

export default Header;
