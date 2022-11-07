import React from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setOpenCart,selectCartItems } from "../app/CartSlice";
const Navbar = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const onCartToggle = () => {
    dispatch(setOpenCart({
      cartState : true
    }))
  }

  const [navState, setNavState] = useState(false);
  const onNavbarScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavbarScroll);
    return () => {
      window.removeEventListener("scroll", onNavbarScroll);
    };
  });

  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-200 blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transtions-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transtions-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
              onClick={onCartToggle}
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-500 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transtions-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0   shadow  w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer ${
                    navState
                      ? "bg-slate-900 text-slate-200 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {cartItems.reduce((pre,cur,i) => (pre += cur.cartQuantity),0)}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
