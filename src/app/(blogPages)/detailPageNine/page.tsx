"use client"
import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../../components/carousel";
import { Footer } from "../../components/footer";
import { NewsNine,  } from "../../components/paragraphs";
import { PopularNews } from "../../components/cards";
import { Navbar } from "@/app/components/navbar";


export default function detailPageNine(){

    return(
        <>
      <Navbar  />
      <DetailBanner smWidth="sm:w-[1000px]" image="https://e3.365dm.com/24/07/1600x900/skynews-cyber-hack-attack-hacker_6639079.jpg?20240725172039" title="The UK is 'widely' underestimating online threats from hostile states and criminals, cyber security chief warns
"/>
         <div className="flex sm:flex-row flex-col ">
         <NewsNine/>
        <div className="flex flex-col">
        <Author image="https://e3.365dm.com/23/10/768x432/2b94ca4d153b627df0d8ec542241b700fa4f1ef7234ac9d81cd981760c00e738_6311982.jpg?20231007084721=" 
         name="Mickey Caroll" title="Science and Technology Reporter" text="Mickey Carroll is a science and technology reporter at Sky News, based in London. She covers a wide range of topics, including artificial intelligence, environmental issues, and technological innovations."/>
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