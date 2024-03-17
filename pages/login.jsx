"use client";
import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const router = useRouter()
  const handleSignUp = async () => {
    const res = await axios.post(`/api/user/register`,{
        name:name,
        email:email,
        password:password,
    })
    if(res?.data){
        Cookies.set("user", res.data.token);
        alert(res.data.msg);
        router.push("/");
       
    }
  };
  const handleToggle = () => {
    setLogin(!login);
  };
  const handleLogIn =async () => {
    const res = await axios.post(`/api/user/login`,{
        email:email,
        password:password,
    })
    if(res?.data){
        Cookies.set("user", res.data.token);
        alert(res.data.msg);
        router.push("/");
    }
  };
  return (
    <div>
      <Head>
        <title>Resto- Login!</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-backgound bg-no-repeat bg-cover  ">
        <div className="absolute w-full top-10 px-20 flex items-center text-white">
          <h2 className="text-5xl font-bold mr-5 ">Resto</h2>
          <p className="font-bold text-2xl">
            Hotels and Homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center w-9/12">
          <div className="text-white">
            <p className="font-bold text-5xl">
              There is a smarter way to Resto around{" "}
            </p>
            <p className="text-2xl ">
              Sign up with your phone number and get exclusive access to
              discounts and savings on Resto stays and with your many travel
              partners
            </p>
          </div>
          <div className="w-10/12 pb-40 ml-20  bg-white">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to-red-600 text-lg font-bold text-white ">
              Sign Up and Get 500 Rs resto money
            </p>
            <div className="px-10">
              <h3 className="text-5xl font-bold my-5">Login/SignUp</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your Email to continue
              </p>
             {
                login ? "" :  <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
             }
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password..."
                className="outline-none border my-3 border-black px-3 py-1 w-96 h-10 "
              />
              <button
                onClick={login?handleLogIn:handleSignUp}
                className="w-96 h-14 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg "
              >
                {login?"Log in" : "Sign Up"}
              </button>
              <p className="my-1 text-xl ">
                <span>{login?'Dont have an account':'Already have an account'} ?</span>
                <span
                  onClick={handleToggle}
                  className="m1-3 border-b-2 border-red-400 text-red-500 pb-1 hover:cursor-pointer"
                >
                  {login?"Sign Up":"Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
