"use client"
import { useState } from 'react';
import { ButtonCategoryBlog } from "../components/buttons";
import { CardBlog } from "../components/cards";
import { Carousel } from "../components/carousel";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";



export default function Blog() {
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query
    const [selectedCategory, setSelectedCategory] = useState(''); // State to hold the selected category

    return (
        <div>
            <Navbar setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery to Navbar */}
            <Carousel />
            <div className="py-5 ">
                <ButtonCategoryBlog />
            </div>
            <div className="flex justify-between p-4">
                <CardBlog searchQuery={searchQuery} selectedCategory={selectedCategory}/> {/* Pass searchQuery to CardBlog */}
                <div className="hidden sm:block w-[220px] h-[250px] border rounded ">
                    <div className="bg-black w-full h-[50px] rounded-t">
                        <span className="text-white font-bold text-[25px] flex justify-center items-center">Categories</span>
                    </div>
                    <div className="flex flex-wrap p-2">
                        {['Technology', 'Business', 'Finance', 'Sports', 'Politics', 'Entertainments', 'Science'].map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                #{category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
