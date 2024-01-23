import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  closeMenu,
  openMenu,
  setIsMobile,
  closeSearchOpen,
} from "../redux/appSlice";

import Navbar from "./Navbar";
import ButtonList from "./Sidebar";

function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;
      dispatch(setIsMobile(newIsMobile));

      if (newIsMobile) {
        dispatch(closeSearchOpen());
        dispatch(closeMenu());
      } else {
        dispatch(openMenu());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <div className="w-full h-screen p-2 flex flex-col">
      <Navbar />
      <div className="flex flex-row w-full h-[calc(100%-50px)] relative">
        <ButtonList />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
