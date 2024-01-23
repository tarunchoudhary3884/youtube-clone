import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegCompass } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/appSlice";
import Button from "./Button";
import { categories } from "../constants";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const isMobile = useSelector((store) => store.app.isMobile);

  function handleClick() {
    dispatch(setCategoryId("0"));
  }

  if (!isMenuOpen) {
    return null;
  }

  return (
    <>
      {isMobile ? (
        <div className="absolute left-0 z-20 w-full h-full overflow-y-auto font-semibold sm:hidden bg-zinc-50">
          <Link to="/">
            <h1
              className="m-2 flex items-center text-bold hover:bg-zinc-100"
              onClick={handleClick}
            >
              <div className="p-2 text-2xl ">
                <FaHome />
              </div>
              Home
            </h1>
          </Link>
          <hr className="border-red-600 border-2" />
          <div className="px-2">
            <h1 className="flex items-center text-bold" onClick={handleClick}>
              <div className="p-2 text-2xl">
                <FaRegCompass />
              </div>
              Explore
            </h1>

            {categories.map((category) => (
              <Link to="/" key={category.id}>
                <hr className="border-red-600" />
                <Button category={category} />
              </Link>
            ))}
          </div>
          <hr className="border-red-600 border-2" />
        </div>
      ) : (
        <div className="min-w-60 overflow-y-auto h-full font-semibold hidden sm:block bg-zinc-50">
          <Link to="/">
            <h1
              className="m-2 flex items-center text-bold hover:bg-zinc-100"
              onClick={handleClick}
            >
              <div className="p-2 text-2xl ">
                <FaHome />
              </div>
              Home
            </h1>
          </Link>
          <hr className="border-red-600 border-2" />
          <div className="px-2">
            <h1 className="flex items-center text-bold" onClick={handleClick}>
              <div className="p-2 text-2xl">
                <FaRegCompass />
              </div>
              Explore
            </h1>

            {categories.map((category) => (
              <Link to="/" key={category.id}>
                <hr className="border-red-600" />
                <Button category={category} />
              </Link>
            ))}
          </div>
          <hr className="border-red-600 border-2" />
        </div>
      )}
    </>
  );
}

export default Sidebar;
