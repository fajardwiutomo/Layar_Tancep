import React from "react";
import logo from "./logo.png";
import svg from "./logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleDeleteToken = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    // <div className="h-screen flex justify-center w-screen font-sans">
    <h1 className="flex h-min items-center justify-between w-screen max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl p-5">
      <img onClick={() => navigate("/")} className="h-16 w-16" src={svg} />
      {/* middle section */}
      <div className="flex items-center justify-center gap-5 text-lg text-slate-500 font-semibold">
        <div
          onClick={() => navigate("/")}
          className="hover:text-slate-900 cursor-pointer hover:scale-105"
        >
          Home
        </div>
        <div
          onClick={() => navigate("/movie")}
          className="hover:text-slate-900 cursor-pointer hover:scale-105"
        >
          Movie
        </div>
        {/* <div className="hover:text-slate-900 cursor-pointer hover:scale-105">
          About
        </div> */}
      </div>
      <div>
        <button
          onClick={handleDeleteToken}
          className="py-1 hover:scale-105 md:px-5 rounded-lg sm:px-1 text-white font-medium bg-red-500"
        >
          Sign Out
        </button>
      </div>
    </h1>
    // </div>
  );
};

export default Navbar;
