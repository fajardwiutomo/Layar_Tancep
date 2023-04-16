import React from "react";
import Navbar from "../component/navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import defaultImage from "./user.png";

// import "./styles.css";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

const Detail = () => {
  const detail = useSelector((state) => state.movie?.detail);
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [cast, setCast] = useState([]);
  const filterdarisana = detail.genre_ids;

  const [size, setSize] = useState([window.outerWidth, window.outerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.outerWidth, window.outerHeight]);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  const getVideo = async () => {
    try {
      const response = await axios.get(
        `https://movie-app-tmdb-api-production.up.railway.app/video?id=${detail?.id}`
      );
      setData(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getCast = async () => {
    try {
      const response = await axios.get(
        `https://movie-app-tmdb-api-production.up.railway.app/cast?id=${detail?.id}`
      );
      setCast(response.data.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenre = async () => {
    try {
      const response = await axios.get(
        `https://movie-app-tmdb-api-production.up.railway.app/genre`
      );
      setGenre(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  let dataFinal = [];
  const filter = genre?.map((state) => {
    const data = filterdarisana?.filter((data) => {
      if (data === state.id) {
        dataFinal.push(state.name);
      }
    });
    return data;
  });

  useEffect(() => {
    getVideo();
    scroll();
    getGenre();
    getCast();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center w-screen font-sans max-w-6xl mx-auto">
      <div className=" border border-slate-200 shadow-2xl max-w-sm 2xl:max-w-6xl mx-auto md:max-w-md lg:max-w-2xl xl:max-w-4xl">
        <Navbar />
        {detail && (
          <div className="px-5 lg:flex md:gap-5 gap-10">
            <div className="md:w-full xl:w-2/4 lg:w-3/4 relative w-4/5 mx-auto">
              <img
                className="rounded-xl w-full h-full shadow-lg"
                src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
              />
              <div className="absolute -top-2 -right-5 bg-slate-600 h-10 w-10 font-semibold text-white border-yellow-400 rounded-full flex justify-center items-center border-2">
                {detail?.vote_average?.toFixed(1)}
              </div>
            </div>
            <div className="lg:w-7/12">
              <p className="text-3xl mb-3 font-bold text-slate-600 md:mt-5">
                {detail?.title}
              </p>
              <div className="gap-5 mb-3 sm:flex-col">
                <p className="font-bold text-slate-500 mb-2 sm:mb-2">
                  {detail?.release_date}
                </p>
                {/* <p>{detail?.vote_average}</p> */}
                <p className="flex gap-2 lg:grid grid-cols-2 xl:flex sm:grid">
                  {dataFinal &&
                    dataFinal?.map((data, i) => {
                      return (
                        <span className="bg-red-500 rounded-md px-4 text-white text-sm flex items-center justify-center">
                          {data}
                        </span>
                      );
                    })}
                </p>
              </div>
              <p className="max-w-xl">{detail?.overview}</p>
              <button className="bg-green-600 text-white px-5 py-2 rounded-md mt-5 font-bold">
                <a
                  target="_blank"
                  className="watch-detail"
                  href={`https://www.youtube.com/watch?v=${data.key}`}
                >
                  Watch Thriller
                </a>
              </button>
            </div>
          </div>
        )}
        <div className="p-5">
          <h1 className="text-2xl mb-2 text-slate-500 font-bold">Cast</h1>
          {size[0] <= 768 && (
            <Swiper
              className="max-w-6xl border border-slate-100 rounded-md shadow-md"
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              {cast &&
                cast.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card flex flex-col justify-center items-center w-24 mx-auto">
                        <img
                          className="image py-2 object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
                          src={
                            data.profile_path
                              ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
                              : `${defaultImage}`
                          }
                        />
                        <span>{data?.name}</span>
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
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              {cast &&
                cast.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card flex flex-col justify-center items-center w-32 mx-auto">
                        <img
                          className="image py-2 object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
                          src={
                            data.profile_path
                              ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
                              : `${defaultImage}`
                          }
                        />
                        <span>{data?.name}</span>
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
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={6}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              {cast &&
                cast.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card flex flex-col justify-center items-center w-24 mx-auto">
                        <img
                          className="image py-2 object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
                          src={
                            data.profile_path
                              ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
                              : `${defaultImage}`
                          }
                        />
                        <span>{data?.name}</span>
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
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={8}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              {cast &&
                cast.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card flex flex-col justify-center items-center w-24 mx-auto">
                        <img
                          className="image py-2 object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
                          src={
                            data.profile_path
                              ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
                              : `${defaultImage}`
                          }
                        />
                        <span>{data?.name}</span>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
          {size[0] > 1537 && (
            <Swiper
              className="max-w-6xl border border-slate-100 rounded-md shadow-md"
              // install Swiper modules
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={10}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              {cast &&
                cast.map((data, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card flex flex-col justify-center items-center w-24 mx-auto">
                        <img
                          className="image py-2 object-cover rounded-3xl hover:scale-105 transition duration-300 ease-in-out"
                          src={
                            data.profile_path
                              ? `https://image.tmdb.org/t/p/w300${data.profile_path}`
                              : `${defaultImage}`
                          }
                        />
                        <span>{data?.name}</span>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
