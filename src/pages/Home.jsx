import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../component/navbar";
import Headline from "../component/Headline";
import NowPlaying from "../component/NowPlaying";
import Trending from "../component/Trending";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
    }
  }, [localStorage.getItem("access_token")]);
  return (
    <div className="h-screen flex flex-col items-center w-screen font-sans">
      <div className="border border-slate-200 shadow-2xl max-w-sm 2xl:max-w-6xl mx-auto md:max-w-md lg:max-w-2xl xl:max-w-4xl">
        <Navbar />
        <Headline />
        <NowPlaying />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
