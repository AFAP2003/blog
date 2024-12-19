"use client"

import { useEffect,useRef,useState} from "react";


export function Navbar({ setSearchQuery }:any) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchClick = () => {
        setIsMenuOpen(true);
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 300);
    };

    return (
        <div
            className={`fixed top-0 z-10 flex justify-between items-center px-4 w-full h-[50px] transition-colors ${
                isScrolled || isMenuOpen ? "bg-white text-black shadow-md" : "bg-transparent text-white"
            }`}
        >
            {/* Logo */}
            <div className="flex items-center">
                <a href="/">
                    <img src="/portfolio logo.png" alt="Logo" className="h-[50px]" />
                </a>
            </div>

            {/* Navigation Links */}
            <div
                className={`absolute lg:static top-[50px] left-0 w-full bg-white lg:bg-transparent lg:flex lg:gap-10 lg:w-auto lg:translate-y-0 ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <div
                    className={`flex flex-col items-center lg:flex-row gap-4 lg:gap-10 p-4 lg:p-0 ${
                        isMenuOpen ? "text-black" : ""
                    }`}
                >
                    <a href="/" className="block lg:inline">
                        Home
                    </a>
                    <a href="/blog" className="block lg:inline">
                        Blog
                    </a>
                    <a href="/category" className="block lg:inline">
                        Categories
                    </a>
                    <a href="/about" className="block lg:inline">
                        About
                    </a>
                </div>
            </div>

            {/* Search Input for Large Screens */}
            <div className="hidden lg:block">
                <div className="relative">
                    <input
                        className={`w-full bg-transparent placeholder:text-slate-400 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 focus:outline-none ${
                            isScrolled ? "text-black" : "text-white"
                        }`}
                        placeholder="Search..."
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    />
                    <button
                        className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 text-white"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 mr-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Search
                    </button>
                </div>
            </div>

            {/* Menu Icon for Small Devices */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                    className="text-xl"
                >
                    ☰
                </button>
            </div>

            {/* Search Input for Small Devices */}
            {isMenuOpen && (
                <div className="px-4 sm:px-0 mb-3 sm:mb-0 block sm:hidden w-full max-w-sm min-w-[200px]">
                    <div className="relative flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            ref={searchInputRef}
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Search"
                            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
