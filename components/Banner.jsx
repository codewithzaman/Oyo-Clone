"use client";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60 ">
      <div className=" p-5">
        <h2 className="text-4xl font-bold text-center text-white">
          Over 157000 hotels and homes across 35 country
        </h2>
        <div className="grid grid-cols-5 my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none border-r-2 border-gray-400 px-3 text-lg col-span-2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none border-r-2 border-gray-400 px-3 text-lg col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className="h-16 outline-none px-3 text-lg col-span-1"
          />
         <Link href={"/hotels"}>
         <button
            type="submit"
            className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-500 text-white text-xl"
          >
            Search
          </button>
         </Link>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className="h-16 px-3 py-2   hover:cursor-pointer  text-white  mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2   hover:cursor-pointer  text-white  mr-5 border-2 border-white hover:bg-slate-300 rounded-xl"
          >
            Home Stay in india Hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
