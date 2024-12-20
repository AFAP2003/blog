"use client"
import { CardCategory } from "../components/cards"
import { Carousel } from "../components/carousel"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer";
import { useState } from "react";

const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

export default function Category(){
    return(
        <>
          <div>

          <Navbar setSearchQuery={setSearchQuery}  />
          <Carousel/>
<div className="flex justify-center p-4">
        <CardCategory/>
        </div>

        <Footer/>
        </div>
       
        </>
      
       
    )
}