import React, { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import GoogleIcon from "./Google.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post(
        `https://movie-app-tmdb-api-production.up.railway.app/register`,
        {
          username: username,
          email: email,
          password: password,
        }
      );
      Swal.fire({
        title: "Success!",
        text: "register successfully",
        icon: "success",
        confirmButtonText: "Close",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Error to register",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    register();
    setUsername("");
    setEmail("");
    setPassword("");
    setTimeout(() => {
      navigate("/login");
    }, [1000]);
  }

  return (
    <div>
      {" "}
      <div className="bg-slate-100 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-slate-200 flex rounded-2xl shadow-lg max-w-5xl p-5">
          <div className="md:w-1/2 px-16">
            <h1 className="text-2xl font-semibold"> Sign Up</h1>
            <p className="text-sm mt-4">
              Register to get access to our services
            </p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="name"
                value={username}
                placeholder="Name"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                className="p-2 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <EyeIcon className="absolute top-3 right-2 h-5 text-gray-500" />
              </div>
              {/* <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <EyeIcon className="absolute top-3 right-2 h-5 text-gray-500" />
              </div> */}
              <button
                onClick={handleSubmit}
                // disabled={
                //   !email ||
                //   !password ||
                // }
                className="bg-blue-500 font-semibold rounded-xl text-white px-4 py-2 mt-4 hover:scale-110 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center">OR</p>
              <hr className="border-gray-500" />
            </div>
            <button
            disabled
            className="disabled:cursor-not-allowed hover:scale-110 duration-300 bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-2 text-sm">
              <img src={GoogleIcon} className="h-5 w-5" />
              Sign up with Google
            </button>

            <p className="mt-10 text-xs border-b  border-gray-400 py-4">
              Forgot your password
            </p>
            <div className="text-sm mt-3 flex justify-between items-center">
              <p>If you already have an account</p>
              <button
              onClick={() => navigate("/login")}
              className="  hover:scale-110 duration-300 py-2 px-4 border bg-white rounded-xl">
                Login
              </button>
            </div>
          </div>
          <div className=" md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
