"use client"

import Image from "next/image";
import { Navbar } from "./components/navbar";
import { Carousel } from "./components/carousel";
import {  ButtonCategoryHome, ButtonLoad } from "./components/buttons";
import { Card } from "./components/cards";
import { Footer } from "./components/footer";
import { useState } from 'react';
export default function Home() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  return (
    <div className="">
      <Navbar setSearchQuery={setSearchQuery}  />
      <Carousel />

      <div className="">
        <h1></h1>
        <div className="py-5 ">
          <ButtonCategoryHome />
        </div>
        <div className="flex justify-center p-4">
          <Card searchQuery={searchQuery} />
        </div>
        <div className="mt-[50px] flex justify-center">      <ButtonLoad />
        </div>

        <div className="flex justify-center ">
          <div className="sm:min-w-[1252px]  mt-[50px] h-auto border rounded ">
            <div className="flex flex-col">
              <div className="p-8">
                <span className="sm:text-[40px]  font-bold">SIGN UP FOR OUR NEWSLETTER</span>
                <div className="flex sm:flex-row flex-col  sm:h-[50px] justify-between sm:mt-6 gap-y-4 mt-[10px] ]">
                  <input type="text" className="border p-2 sm:p-2 border-gray-400 w-[300px] pl-4 rounded " placeholder="Enter your name" />
                  <input type="text" className="border p-2 sm:p-2 border-gray-400 w-[300px] pl-4 rounded" placeholder="Enter your email" />
                  <a href="" className="text-black ">
                    <div className="border border-black w-[300px] bg-black  sm:h-[50px] text-white px-2 py-2  rounded ">
                      <div className="flex justify-center p-1">
                        <span className="">Subscribe</span>
                      </div>
                    </div>
                  </a>                </div>
              </div>


            </div>

          </div>
        </div>


      </div>
      <div className="mt-20"> 
      <Footer/>

      </div>

    </div>
  );
}
