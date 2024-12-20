
"use client"
import { useState } from "react";


export function Footer() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section:string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };
    return (
        <>
        <div className="hidden  sm:flex bg-black sm:justify-around sm:p-20">
            <div className="hidden sm:block">
            <div className="flex flex-col text-white text-[15px] gap-3">
                <h1 className="text-[20px] font-bold">Contact the Publisher</h1>
                <span>andi@gmail.com</span>
                <span>+621234568910</span>
            </div>
         

            </div>
           <div className="hidden sm:block">
           <div className="flex flex-col text-white text-[15px] gap-3">
                <h1 className="text-[20px] font-bold">Explore</h1>
                <span>Home</span>
                <span>Blog</span>
                <span>Categories</span>
                <span>About</span>

            </div>
           </div>
            
           <div className="hidden sm:block">
           <div className="flex flex-col text-white text-[15px] gap-3">
                <h1 className="text-[20px] font-bold">Headquarter</h1>
                <span>Pacific Century Place Tower Level 45 SCBD Lot 10, Jl. Jenderal Sudirman No.53, RT.5/RW.3</span>            </div>
           </div>
          <div className="hidden sm:block">
          <div className="flex flex-col text-white gap-2">
                <h1 className="text-[20px] font-bold">Connections</h1>
                <div className="flex gap-[15px]">
                    <a href="">
                        <img src="/facebook.png" className="w-[30px] h-[30px]" alt="" />
                    </a>
                    <a href="">
                        <img src="/instagram.png" className="w-[30px] h-[30px]" alt="" />
                    </a>
                    <a href="">
                    <img src="/twitter.png" alt=""  className="w-[30px] h-[30px]"/>

                    </a>
                    <a href="">
                    <img src="/linkedin.png" alt=""  className="w-[30px] h-[30px]"/>

                    </a>

                </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden bg-black text-white p-4">
            {/* Contact the Publisher Section */}
            <div className="border-b border-gray-700">
                <h1
                    className="text-[20px] font-bold py-2 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection("contact")}
                >
                    Contact the Publisher
                    <span>{expandedSection === "contact" ? "-" : "+"}</span>
                </h1>
                {expandedSection === "contact" && (
                    <div className="pl-4 text-[15px]">
                        <span>andi@gmail.com</span>
                        <br />
                        <span>+621234568910</span>
                    </div>
                )}
            </div>

            {/* Explore Section */}
            <div className="border-b border-gray-700">
                <h1
                    className="text-[20px] font-bold py-2 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection("explore")}
                >
                    Explore
                    <span>{expandedSection === "explore" ? "-" : "+"}</span>
                </h1>
                {expandedSection === "explore" && (
                    <div className="pl-4 text-[15px]">
                        <span>Home</span>
                        <br />
                        <span>Blog</span>
                        <br />
                        <span>Categories</span>
                        <br />
                        <span>About</span>
                    </div>
                )}
            </div>

            {/* Headquarter Section */}
            <div className="border-b border-gray-700">
                <h1
                    className="text-[20px] font-bold py-2 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection("headquarter")}
                >
                    Headquarter
                    <span>{expandedSection === "headquarter" ? "-" : "+"}</span>
                </h1>
                {expandedSection === "headquarter" && (
                    <div className="pl-4 text-[15px]">
                        <span>
                            Pacific Century Place Tower Level 45 SCBD Lot 10, Jl. Jenderal Sudirman No.53, RT.5/RW.3
                        </span>
                    </div>
                )}
            </div>

            {/* Connections Section */}
            <div className="flex flex-col items-center text-white gap-2 mt-4">
                <div className="flex gap-[15px]">
                    <a href="">
                        <img src="/facebook.png" className="w-[40px] h-[40px]" alt="" />
                    </a>
                    <a href="">
                        <img src="/instagram.png" className="w-[40px] h-[40px]" alt="" />
                    </a>
                    <a href="">
                    <img src="/twitter.png" alt=""  className="w-[40px] h-[40px]"/>

                    </a>
                    <a href="">
                    <img src="/linkedin.png" alt=""  className="w-[40px] h-[40px]"/>

                    </a>

                </div>
            </div>
          </div>
        
        </>
    )
}
