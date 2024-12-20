"use client"
import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../../components/carousel";
import { Footer } from "../../components/footer";
import { NewsSeven } from "../../components/paragraphs";
import { PopularNews } from "../../components/cards";
import { Navbar } from "@/app/components/navbar";
import { useState } from "react";


export default function detailPageSeven(){
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

    return(
        <>
      <Navbar setSearchQuery={setSearchQuery}  />
      <DetailBanner smWidth="sm:w-[1000px]" image="https://e3.365dm.com/24/12/1600x900/skynews-tiktok-ban_6768568.jpg?20241206174937" title="TikTok faces US ban after losing court battle"/>
         <div className="flex sm:flex-row flex-col ">
         <NewsSeven/>
        <div className="flex flex-col">
        <Author image="https://e3.365dm.com/24/01/120x120/skynews-ed-conway-economics-and-data-editor_6418565.jpg?20240111171126" 
         name="Ethan Reyes" title="Politics and Business Reporter" text="Ethan Reyes is a skilled reporter focusing on politics and business. Based in Washington, D.C., he provides in-depth coverage of political policies and their economic implications. Known for his analytical approach, Ethan breaks down complex issues to make them accessible to a wide audience."/>
        <PopularNews/>
        </div>

         </div>
         <div className="sm:ml-[300px] ml-[50px] mt-[20px] flex flex-col">
            <div>
            <span className="font-bold text-[30px]">You might like</span>

            </div>
            <div className="mt-[30px]">
            <CardRecommendation/>

            </div>
         </div>
         <div className="mt-[50px]">
         <Footer/>

         </div>
        </>
       
    )
}