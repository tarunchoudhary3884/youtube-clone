import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleSearchOpen } from "../redux/appSlice";
import logoSvg from "../assets/logo.svg";

function Navbar() {
  const [queryText, setQueryText] = useState("");
  const isSearchOpen = useSelector((store) => store.app.isSearchOpen);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleToggleSearch = () => {
    dispatch(toggleSearchOpen());
  };

  const isSearchButtonDisabled = queryText.trim() === "";

  return (
    <div
      className={`${
        isSearchOpen ? "justify-center " : "justify-between"
      } flex items-center  sm:justify-start gap-14 p-2  px-4 bg-zinc-50`}
    >
      {!isSearchOpen && (
        <div className="flex items-center gap-4 ">
          <div onClick={handleToggleMenu} className="cursor-pointer">
            <FaBars className="text-2xl font-bold" />
          </div>
          <Link to="/">
            <div className="w-24">
              <img src={logoSvg} alt="logo" />
            </div>
          </Link>
        </div>
      )}
      <div className="flex justify-center items-center sm:w-full">
        <div
          className={`${
            isSearchOpen ? "flex" : "hidden"
          } sm:flex items-center justify-center `}
        >
          <input
            type="search"
            className="border-2 border-zinc-500 p-2 w-48 sm:w-80 h-9 outline-none"
            value={queryText}
            onChange={(event) => setQueryText(event.target.value)}
            placeholder="Search"
            required
          />
          <Link to={`/search?q=${queryText}`}>
            <button
              className="h-9 p-2 text-xl bg-zinc-100 border border-zinc-500"
              disabled={isSearchButtonDisabled}
            >
              <FaSearch />
            </button>
          </Link>
        </div>
        <button
          className="h-9 p-2 text-xl bg-zinc-100 border border-zinc-500 sm:hidden"
          onClick={handleToggleSearch}
        >
          {isSearchOpen ? <FaXmark /> : <FaSearch />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
