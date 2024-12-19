
export function ButtonCategoryHome() {
    const categories = [
        "Technology",
        "Business",
        "Finance",
        "Sports",
        "Politics",
       
    ];

    return (
        <>
        <div>
        <span className="font-bold flex sm:justify-center justify-start  sm:text-[30px] text-[20px]  pl-4 sm:pl-0">Popular Category</span>

        </div>
          <div className="sm:px-4 sm:flex sm:flex-wrap  sm:justify-center sm:items-center sm:gap-[20px] overflow-x-auto whitespace-nowrap py-2 px-4 mt-4">
            {/* Horizontal scroll container */}
            <div className="flex gap-4">
                {categories.map((cat, index) => (
                    <a href="" key={index}> {/* Add unique key */}
                        <div className="px-4 py-2 rounded bg-black/80 text-white">
                            {cat}
                        </div>
                    </a>
                ))}
            </div>
        </div>
        </>
      
    );
}

export function ButtonCategoryBlog() {
    const categories = [
        "All",
        "Breaking News",
        "Technology",
        "Business",
        "Finance",
        "Sports",
        "Politics",
        "Entertainment",
        "Science",
        "Lifestyle",
    ];

    return (
        <>
        <div>
        <span className="sm:hidden block font-bold flex sm:justify-center justify-start  sm:text-[30px] text-[20px]  pl-4 sm:pl-0">Category</span>

        </div>
          <div className="sm:hidden sm:px-4 sm:flex-wrap  sm:justify-center sm:items-center sm:gap-[20px] overflow-x-auto whitespace-nowrap py-2 px-4 mt-4">
            {/* Horizontal scroll container */}
            <div className="flex gap-4">
                {categories.map((cat, index) => (
                    <a href="" key={index}> {/* Add unique key */}
                        <div className="px-4 py-2 rounded bg-black/80 text-white">
                            {cat}
                        </div>
                    </a>
                ))}
            </div>
        </div>
        </>
      
    );
}


  export function ButtonLoad(){
    return(
        <a href="" className="text-black hover:text-white">
        <div className="border border-black px-2 py-2 w-[150px] rounded hover:bg-black">
          <div className="flex justify-center">
            <span className="">Load More</span>
          </div>
        </div>
      </a>
    )
}
  

export function ButtonSubmit() {
    return (
      <button className="px-4 py-2 bg-black text-white rounded-md ">
        Submit
      </button>
    )
  }