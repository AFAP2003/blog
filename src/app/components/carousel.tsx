"use client"
import { useState, useEffect } from "react";



export function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

const images = [
    "https://www.ktsm.com/wp-content/uploads/sites/38/2023/02/eb9f75ddbca846a7bff72c8948594fa8.jpg",
    "https://www.sae.org/binaries/content/gallery/cm/articles/news/2019/11/tesla-cybertruck-unveil_banner.jpg",
    "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25321460/GettyImages_1251437220.jpg?quality=90&strip=all&crop=0,10.732984293194,100,78.534031413613",
];

const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
};

const handleNext = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
};

    return (


        <div id="controls-carousel" className="relative top-0 w-full z-0" data-carousel="static">
            <div className="relative h-56 overflow-hidden lg md:h-[600px]">
                <img
                    src={images[currentIndex]}
                    className="absolute block w-full h-full object-cover transition-all duration-700 ease-in-out"
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
          <span className="sm:text-[55px] text-[20px] font-bold   rounded-lg">
            All News in One Place
          </span>
          <span className="textsm:text-[20px]">Present You the Latest and the Most Accurate News</span>
        </div>

            <button onClick={handlePrev}
                type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button onClick={handleNext}
                type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    )
} 
type BannerPages = {
    image:string;
    title:string;
    width?:string;
    smWidth?:string;
}
export function DetailBanner({image,title,width,smWidth}:BannerPages){
const defaultWidth = "w-[250px]"
const defaultSmWidth = "sm:w-[700px]"
   
    
        return (
    
    
            <div id="controls-carousel" className="relative top-0 w-full z-0" data-carousel="static">
                <div className="relative h-56 overflow-hidden lg md:h-[600px]">
                    <img
                        src={image}
                        className="absolute block w-full h-full object-cover transition-all duration-700 ease-in-out"
                        alt=""
                    />
                </div>
                <div className={`absolute inset-0 sm:pt-[300px] sm:ml-[300px] ${smWidth ||defaultSmWidth} z-10 text-white ${width||defaultWidth} mt-[100px] ml-[50px] sm:mt-0`}>
              <span className="sm:text-[55px] text-[20px] font-bold   rounded-lg ">
              {title}             </span>
            </div>
    
               
            </div>
    
        )
}

export function AboutBanner(){

   
    
    return (


        <div id="controls-carousel" className="relative top-0 w-full z-0" data-carousel="static">
            <div className="relative h-56 overflow-hidden lg md:h-[600px]">
                <img
                    src="https://e3.365dm.com/24/12/1600x900/skynews-artemis-nasa_6768058.jpg?20241206091047"
                    className="absolute block w-full h-full object-cover transition-all duration-700 ease-in-out"
                    alt=""
                />
            </div>
            <div className="absolute inset-0 sm:pt-[300px] sm:ml-[300px] sm:w-[700px] z-10 text-white w-[250px] mt-[100px] ml-[50px] sm:mt-0">
         
        </div>

           
        </div>

    )
}