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
import { useSelector } from "react-redux";

function Body() {
  const dispatch = useDispatch();
  const isMobile = useSelector((store) => store.app.isMobile);
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;

      if (newIsMobile !== isMobile) {
        dispatch(setIsMobile(newIsMobile));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  useEffect(() => {
    if (isMobile) {
      dispatch(closeSearchOpen());
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  }, [isMobile]);

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
