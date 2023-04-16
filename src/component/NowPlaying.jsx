import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { Detail } from "../../pages/detail/Detail";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GET_DETAIL, GET_NOWPLAYING } from "../redux/movieSlice";

const NowPlaying = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [size, setSize] = useState([window.outerWidth, window.outerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.outerWidth, window.outerHeight]);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const fetchNowPlaying = async () => {
    const response = await axios.get(
      "https://movie-app-tmdb-api-production.up.railway.app/now-playing"
    );
    setMovie(response.data.results);
    dispatch(GET_NOWPLAYING(response.data.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  const handleClick = (data) => {
    dispatch(GET_DETAIL(data));
    navigate("/detail");
  };

  return (
    <div className="px-5 pt-10">
      <h1 className="text-2xl mb-2 text-slate-500 font-bold">Now Playing</h1>
      {size[0] <= 768 && (
        <Swiper
          className="max-w-6xl border border-slate-100 rounded-md shadow-md"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movie &&
            movie.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="card flex justify-center items-center w-36 mx-auto"
                    onClick={() => handleClick(data)}
                  >
                    <img
                      className="image py-2 object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    />
                    {/* <h1 className="flex-col absolute text-sm z-10 flex justify-center mx-auto text-white p-5 mt-28">
                    <p className="font-bold text-base">{data.title}</p>
                    <p> {data.release_date}</p>
                  </h1> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {769 < size[0] && size[0] <= 1024 && (
        <Swiper
          className="max-w-6xl border border-slate-100 rounded-md shadow-md"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movie &&
            movie.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="card flex justify-center items-center w-36 lg:w-40  mx-auto"
                    onClick={() => handleClick(data)}
                  >
                    <img
                      className="image py-2 object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    />
                    {/* <h1 className="flex-col absolute text-sm z-10 flex justify-center mx-auto text-white p-5 mt-28">
                    <p className="font-bold text-base">{data.title}</p>
                    <p> {data.release_date}</p>
                  </h1> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {1025 < size[0] && size[0] <= 1280 && (
        <Swiper
          className="max-w-6xl border border-slate-100 rounded-md shadow-md"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movie &&
            movie.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="card flex justify-center items-center w-36  mx-auto"
                    onClick={() => handleClick(data)}
                  >
                    <img
                      className="image py-2 object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    />
                    {/* <h1 className="flex-col absolute text-sm z-10 flex justify-center mx-auto text-white p-5 mt-28">
                    <p className="font-bold text-base">{data.title}</p>
                    <p> {data.release_date}</p>
                  </h1> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {1280 < size[0] && size[0] <= 1536 && (
        <Swiper
          className="max-w-6xl border border-slate-100 rounded-md shadow-md"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movie &&
            movie.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="card flex justify-center items-center w-36  mx-auto"
                    onClick={() => handleClick(data)}
                  >
                    <img
                      className="image py-2 object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    />
                    {/* <h1 className="flex-col absolute text-sm z-10 flex justify-center mx-auto text-white p-5 mt-28">
                    <p className="font-bold text-base">{data.title}</p>
                    <p> {data.release_date}</p>
                  </h1> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
      {size[0] > 1536 && (
        <Swiper
          className="max-w-6xl border border-slate-100 rounded-md shadow-md"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={7}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {movie &&
            movie.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    className="card flex justify-center items-center w-36  mx-auto"
                    onClick={() => handleClick(data)}
                  >
                    <img
                      className="image py-2 object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
                      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    />
                    {/* <h1 className="flex-col absolute text-sm z-10 flex justify-center mx-auto text-white p-5 mt-28">
                    <p className="font-bold text-base">{data.title}</p>
                    <p> {data.release_date}</p>
                  </h1> */}
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
  );
};

export default NowPlaying;
