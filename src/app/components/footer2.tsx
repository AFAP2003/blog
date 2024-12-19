import { useState } from "react";

export function Footer2() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="bg-black text-white p-4">
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
            <div className="border-b border-gray-700">
                <h1
                    className="text-[20px] font-bold py-2 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection("connections")}
                >
                    Connections
                    <span>{expandedSection === "connections" ? "-" : "+"}</span>
                </h1>
                {expandedSection === "connections" && (
                    <div className="pl-4">
                        <div className="flex gap-[15px]">
                            <a href="">
                                <img src="/facebook.png" className="w-[30px] h-[30px]" alt="Facebook" />
                            </a>
                            <a href="">
                                <img src="/instagram.png" className="w-[30px] h-[30px]" alt="Instagram" />
                            </a>
                            <a href="">
                                <img src="/twitter.png" className="w-[30px] h-[30px]" alt="Twitter" />
                            </a>
                            <a href="">
                                <img src="/linkedin.png" className="w-[30px] h-[30px]" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
