import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Headline = () => {
  const [movie, setMovie] = useState([]);
  const [data, setData] = useState([]);

  const fetchNowPlaying = async () => {
    const response = await axios.get(
      "https://movie-app-tmdb-api-production.up.railway.app/now-playing"
    );
    setMovie(response.data.results[2]);
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
  
  return (
    <div
      className="ml-5 mr-5 h-[500px] rounded-3xl shadow-2xl"
      style={{
        backgroundImage:
          "url(" + `https://image.tmdb.org/t/p/w500${movie?.poster_path}` + ")",
        backgroundSize: "fit",
      }}
    >
      <div className="w-10/12 mx-auto pt-52">
        <h1 className="text-slate-100 text-6xl font-extrabold">{movie.title}</h1>
        <h2 className="text-slate-100 text-base font-medium max-w-lg pt-5">{movie.overview}</h2>
      </div>
    </div>
  );
};

export default Headline;
