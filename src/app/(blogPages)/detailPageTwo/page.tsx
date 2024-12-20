import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../../components/carousel";
import { Footer } from "../../components/footer";
import {  NewsTwo } from "../../components/paragraphs";
import { PopularNews } from "../../components/cards";
import { Navbar } from "@/app/components/navbar";


export default function detailPageTwo(){
    return(
        <>
            <Navbar/>
         <DetailBanner smWidth="sm:w-[800px]"image="https://e3.365dm.com/24/12/1600x900/skynews-juan-soto_6771272.jpg?20241209102112" title="Baseball star Juan Soto 'agrees record 15-year $765m deal' with New York Mets
"/>
         <div className="flex sm:flex-row flex-col ">
         <NewsTwo/>
        <div className="flex flex-col">
        <Author image="https://e3.365dm.com/23/02/120x120/skynews-tomos-evans-wales-reporter_6064091.jpg?20230220170134" 
         name="Alexandra Barnes" title="Sports and Entertainment Reporter" text="Alexandra Barnes is a versatile journalist with a passion for sports and entertainment. Based in New York, she covers major sporting events and the latest in the entertainment industry. Her deep knowledge of both fields allows her to bridge the gap between athletics and pop culture, offering fresh insights and engaging stories."/>
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