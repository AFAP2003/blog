"use client"

import contentfulClient from "@/contentful/contentfulClient";
import { IContentfulAsset, TypeBlogSkeleton } from '@/contentful/types/blog.types';
import { useState,useEffect } from "react";
import Link from "next/link";

type BlogEntry = {
    title: string;
    text: string;
    image: string;
    category: string;
    slug:string
};
const getBlogContentful = async (): Promise<BlogEntry[]> =>{
    try{
      const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
        content_type: 'blog', // Specify the content type ID for "portfolio"
        order: 'sys.createdAt', // Oldest first

      });
      return data.items.map((item) => ({
        title: item.fields.title,
        text: item.fields.summary || "",
        image:  (item.fields.image as IContentfulAsset)?.fields.file.url || "",
        category: item.fields.category || "Uncategorized",
        slug:item.fields.slug || "",
      

    }));
    } catch(err){
      console.log(err)
      return[]
    }
  }
  type CardProps = {
    searchQuery:string
  }
export function Card({searchQuery}:CardProps) {
  
    const card = [
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-artemis-nasa_6768058.jpg?20241206091047',
            title: 'NASA delays flagship moon landing plans once again',
            text: "The Artemis mission will see four astronauts sent around the moon and back, before blasting off to land on the moon's surface a year later.",
            category: 'Science',
            link:'/detailPageOne'
        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-juan-soto_6771272.jpg?20241209102112',
            title: "Baseball star Juan Soto 'agrees record 15-year $765m deal' with New York Mets",
            text: 'A baseball star has reportedly agreed a 15-year $765m (£600m) deal with the New York Mets - one of the richest contracts in sport history.',
            category: 'Sports',
            link:'/detailPageTwo'


        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-taylor-swift-eras-tour_6771083.jpg?20241209000914',
            title: 'Taylor Swift wraps her record-breaking Eras Tour in Vancouver',
            text: "It's taken a whopping 632 days to complete and generated billions of dollars as it travelled the globe, but now Taylor Swift's Eras tour is finally over.",
            category: 'Entertainment',
            link:'/detailPageThree'

        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-donald-trump_6768852.jpg?20241207083653',
            title: 'Donald Trump vows to end birthright citizenship',
            text: 'Donald Trump has vowed to end birthright citizenship, under which people born in the US are considered citizens. ',
            category: 'Politics',
            link:'/detailPageFour'

        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-willow-quantum_6772127.jpg?20241210095502',
            title: "Google unveils 'astonishing' quantum computing chip called Willow",
            text: "Google has unveiled a computing chip capable of solving problems in minutes that would take one of today's fastest supercomputers 10 septillion years to complete.",
            category: 'Technology',
            link:'/detailPageFive'


        },
        {
            image: 'https://e3.365dm.com/23/09/1600x900/skynews-poundland-shop_6283516.jpg?20230913142842',
            title: "Poundland takes £642m hit on 'challenges' amid budget threat",
            text: "The owner of Poundland has revealed a £642m (€775m) hit to the UK discount retailer, citing several major headwinds including rising costs amid the budget burden facing businesses.",
            category: 'Business',
            link:'/detailPageSix'

        }
    ];
    const filteredCards = card.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="flex flex-col gap-[30px] sm:grid sm:grid-cols-3 sm:gap-x-[50px] sm:gap-y-[50px]">

            {filteredCards.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-auto" // Highlighted change
                >
                    <img className="w-full" src={item.image} alt={item.title} />

                    <div className="px-6 py-4 flex-grow"> {/* Highlighted change */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.category}</span>

                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base line-clamp-4"> {/* Highlighted change */}
                            {item.text}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 mt-auto"> {/* Highlighted change */}
                        <a href={item.link}>
                            <div className="max-w-[78px]">
                                <span className="text-black">Read More</span>
                                <hr className="border-black border-t-[3px]" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
type CardBlogProps = {
    searchQuery: string;
    selectedCategory: string;
};
export function CardBlog({searchQuery,selectedCategory}:CardBlogProps) {
    const blog = getBlogContentful()
    const [blogs, setBlogs] = useState<BlogEntry[]>([]); // State to hold Contentful blog data

    type filter={
        image:string;
        title:string;
        text:string;
        category:string;
        link:string;
       
    }
    // const card:filter[] = [
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-artemis-nasa_6768058.jpg?20241206091047',
    //         title: 'NASA delays flagship moon landing plans once again',
    //         text: "The Artemis mission will see four astronauts sent around the moon and back, before blasting off to land on the moon's surface a year later.",
    //         category: 'Science',
    //         link:'/detailPageOne'
    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-juan-soto_6771272.jpg?20241209102112',
    //         title: "Baseball star Juan Soto 'agrees record 15-year $765m deal' with New York Mets",
    //         text: 'A baseball star has reportedly agreed a 15-year $765m (£600m) deal with the New York Mets - one of the richest contracts in sport history.',
    //         category: 'Sports',
    //         link:'/detailPageTwo'


    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-taylor-swift-eras-tour_6771083.jpg?20241209000914',
    //         title: 'Taylor Swift wraps her record-breaking Eras Tour in Vancouver',
    //         text: "It's taken a whopping 632 days to complete and generated billions of dollars as it travelled the globe, but now Taylor Swift's Eras tour is finally over.",
    //         category: 'Entertainments',
    //         link:'/detailPageThree'
    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-donald-trump_6768852.jpg?20241207083653',
    //         title: 'Donald Trump vows to end birthright citizenship',
    //         text: 'Donald Trump has vowed to end birthright citizenship, under which people born in the US are considered citizens. ',
    //         category: 'Politics',
    //         link:'/detailPageFour'
    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-willow-quantum_6772127.jpg?20241210095502',
    //         title: "Google unveils 'astonishing' quantum computing chip called Willow",
    //         text: "Google has unveiled a computing chip capable of solving problems in minutes that would take one of today's fastest supercomputers 10 septillion years to complete.",
    //         category: 'Technology',
    //         link:'/detailPageFive'

    //     },
    //     {
    //         image: 'https://e3.365dm.com/23/09/1600x900/skynews-poundland-shop_6283516.jpg?20230913142842',
    //         title: "Poundland takes £642m hit on 'challenges' amid budget threat",
    //         text: "The owner of Poundland has revealed a £642m (€775m) hit to the UK discount retailer, citing several major headwinds including rising costs amid the budget burden facing businesses.",
    //         category: 'Business',
    //         link:'/detailPageSix'
    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/12/1600x900/skynews-tiktok-ban_6768568.jpg?20241206174937',
    //         title: 'TikTok faces US ban after losing court battle',
    //         text: 'TikTok has lost an appeal against plans to ban the video-sharing app in the US.',
    //         category: 'Politics',
    //         link:'/detailPageSeven'
    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/06/1600x900/skynews-sabrina-carpenter-luton_6587523.jpg?20240621151526',
    //         title: 'Sabrina Carpenter to headline BST Hyde Park next July',
    //         text: 'The 25-year-old star - famous for hits including Espresso, Taste and Please, Please, Please - will perform next July in central London',
    //         category: 'Entertainments',
    //         link:'/detailPageEight'

    //     },
    //     {
    //         image: 'https://e3.365dm.com/24/07/1600x900/skynews-cyber-hack-attack-hacker_6639079.jpg?20240725172039',
    //         title: "The UK is 'widely' underestimating online threats from hostile states and criminals, cyber security chief warns",
    //         text: "It comes as the National Cyber Security Centre (NCSC) - a part of GCHQ - revealed there had been a three-fold increase in the most serious attacks compared with a year ago.",
    //         category: 'Technology',
    //         link:'/detailPageNine'
    //     },
    // ];
    useEffect(() => {
        const fetchData = async () => {
            const contentfulData = await getBlogContentful();
            setBlogs(contentfulData); // Set fetched data into state
        };
        fetchData();
    }, []);
    const filteredCards:BlogEntry[] = blogs.filter(item => {
        const matchesSearchQuery =
            item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category?.toLowerCase().includes(searchQuery.toLowerCase());
            
    
        const matchesCategory = selectedCategory
            ? item.category?.toLowerCase() === selectedCategory.toLowerCase()
            : true;
    
        return matchesSearchQuery && matchesCategory; // Return combined conditions
    });
    
    return (
        <div className="flex flex-col gap-[30px] sm:grid sm:grid-cols-3 sm:gap-x-[50px] sm:gap-y-[50px]">
            {filteredCards.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-auto"
                >
                    <img className="w-full" src={`https:${
                item.image
              }`} alt={item.title} />
                    <div className="px-6 py-4 flex-grow">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.category}</span>
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base line-clamp-4">
                            {item.text}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 mt-auto">
                        <Link href={`article/${item.slug}`}>
                            <div className="max-w-[78px]">
                                <span className="text-black">Read More</span>
                                <hr className="border-black border-t-[3px]" />
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

type ImageProps = {
    image: string;
    name:string;
    title:string;
    text:string;
}
export function Author({ image,name,title,text }: ImageProps) {
    return (
        <div className="w-[300px]  border rounded  mt-[45px] ml-[50px]" >
            <div className="flex flex-col items-center pt-[10px] bg-black h-[180px] w-ful rounded-t ">
                <div className="flex justify-center w-[100px] h-[100px] bg-white rounded-full z-0 overflow-hidden ">

                        <div className=""><img src={image} className="w-full h-full object-cover" alt="" /></div>

                </div>
                  <div className="flex flex-col items-center mt-[10px]">
                  <span className="text-[20px] text-white">{name}</span>
                  <span className="text-[15px] text-white">{title}</span>
                  </div>
              
            </div>
            <div className="p-4 ">
            <span className="text-[15px] text-black ">{text}</span>

            </div>

        </div>
    )
}

export function AuthorAbout({ image,name,title,text }: ImageProps) {
    return (
        <div className="w-[300px]  border rounded  mt-[45px]" >
            <div className="flex flex-col items-center pt-[10px] bg-black h-[180px] w-ful rounded-t ">
                <div className="flex justify-center w-[100px] h-[100px] bg-white rounded-full z-0 overflow-hidden ">

                        <div className=""><img src={image} className="w-full h-full object-cover" alt="" /></div>

                </div>
                  <div className="flex flex-col items-center mt-[10px]">
                  <span className="text-[20px] text-white">{name}</span>
                  <span className="text-[15px] text-white">{title}</span>
                  </div>
              
            </div>
            <div className="p-4 ">
            <span className="text-[15px] text-black ">{text}</span>

            </div>

        </div>
    )
}



export function PopularNews(){
    return (
        <div className="w-[300px] h-auto border rounded mt-[20px] ml-[50px]">
            <div className="bg-black w-full h-[70px] rounded-t">
                <div className="flex justify-center items-center pt-3"><span className="text-white font-bold text-[30px]">Popular News</span></div>
            </div> 
            <div className="flex flex-col">
                <div className="w-full h-auto border-b ">
                   <a href="">
                   <div className="flex">
                        <div className=""><img className="object-cover w-[101px] h-[80px]"src="https://e3.365dm.com/24/12/1600x900/skynews-tiktok-ban_6768565.jpg?20241206174824" alt="" /></div>
                        <div className="mt-3 ml-2"><span className="text-black">TikTok faces US ban after losing court battle</span></div>
                    </div>
                   </a>
                </div>
                <div className="w-full h-auto border-b ">
                   <a href="">
                   <div className="flex">
                        <div className=""><img className="object-cover w-[125px] h-[80px]"src="https://e3.365dm.com/24/06/1600x900/skynews-sabrina-carpenter-luton_6587523.jpg?20240621151526" alt="" /></div>
                        <div className="mt-3 ml-2"><span className="text-black">Sabrina Carpenter to headline BST Hyde Park next July</span></div>
                    </div>
                   </a>
                </div>
                <div className="w-full h-auto border-b ">
                   <a href="">
                   <div className="flex">
                        <div className=""><img className="object-cover w-[112px] h-[80px]"src="https://e3.365dm.com/24/12/1600x900/skynews-donald-trump_6768852.jpg?20241207083653" alt="" /></div>
                        <div className="mt-3 ml-2"><span className="text-black">Donald Trump vows to end birthright citizenship
                        </span></div>
                    </div>
                   </a>
                </div>
               
            </div>
        </div>
    )
}

export function CardRecommendation() {
    const card = [
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-tiktok-ban_6768565.jpg?20241206174824',
            title: 'TikTok faces US ban after losing court battle',
            text: 'TikTok has lost an appeal against plans to ban the video-sharing app in the US.',
            category: 'Politics'
        },
        {
            image: 'https://e3.365dm.com/24/06/1600x900/skynews-sabrina-carpenter-luton_6587523.jpg?20240621151526',
            title: 'Sabrina Carpenter to headline BST Hyde Park next July',
            text: 'The 25-year-old star - famous for hits including Espresso, Taste and Please, Please, Please - will perform next July in central London',
            category: 'Entertainments'

        },
        {
            image: 'https://e3.365dm.com/24/07/1600x900/skynews-cyber-hack-attack-hacker_6639079.jpg?20240725172039',
            title: "The UK is 'widely' underestimating online threats from hostile states and criminals, cyber security chief warns",
            text: "It comes as the National Cyber Security Centre (NCSC) - a part of GCHQ - revealed there had been a three-fold increase in the most serious attacks compared with a year ago.",
            category: 'Technology'
        },
      
    ];

    return (
        <div className="flex flex-col gap-[20px]   sm:grid sm:grid-cols-3  sm:gap-y-[50px] max-w-[1000px]">

            {card.map((item, index) => (
                <div
                    key={index}
                    className="max-w-[300px] rounded overflow-hidden shadow-lg flex flex-col justify-between h-full" // Highlighted change
                >
                    <img className="w-full" src={item.image} alt={item.title} />

                    <div className="px-6 py-4 flex-grow"> {/* Highlighted change */}
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.category}</span>

                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base line-clamp-4"> {/* Highlighted change */}
                            {item.text}
                        </p>
                    </div>
                    <div className="px-6 pt-0 pb-2 mt-auto"> {/* Highlighted change */}
                        <a href="">
                            <div className="max-w-[78px]">
                                <span className="text-black">Read More</span>
                                <hr className="border-black border-t-[3px]" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export function CardCategory(){
    const card = [
        {
            image: 'https://e3.365dm.com/24/12/768x432/skynews-luigi-mangione-mugshot_6772648.jpg?20241210193041',
            title: 'Breaking News',
            text: 'Stay informed with the latest updates and breaking stories happening around the world.',
            title1:"Luigi Mangione: Police 'find fingerprints of US CEO gunman suspect match those found near New York crime scene'",
            title2:'Saudi Arabia confirmed as hosts for 2034 World Cup',
            title3:'West has nothing to fear from Syria, rebel leader whose group ousted Assad tells Sky News'
        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-willow-quantum_6772127.jpg?20241210095502',
            title: 'Technology',
            text: 'Explore the cutting-edge advancements and trends shaping the future of technology.',
            title1:"Instagram unveils new feature as govt tightens online safety rules",
            title2:"US Air Force reservist raises $5M for UK quantum start-up TreQ",
            title3:"First brain chip placed in a human"

        },
        {
            image: 'https://e3.365dm.com/23/09/1600x900/skynews-poundland-shop_6283516.jpg?20230913142842',
            title: 'Business',
            text: "Get insights into the world of commerce, markets, and innovative business strategies.",
            title1:"Qantas slashes price tags on more than 170 flights, including popular routes to Sydney, Melbourne and Perth",
            title2:"Irish pub chain Katie O'Brien's surviving Guinness supply limit 'by the skin of our teeth'",
            title3:"Victorian Premier Jacinta Allen announces Business Council"
        },
        {
            image: 'https://e3.365dm.com/24/01/1600x900/skynews-london-stock-exchange_6433018.jpg?20240125141202',
            title: 'Finance',
            text: 'Stay ahead in personal finance, investments, and economic developments worldwide.',
            title1:"NAB chief economist Alan Oster predicts RBA will 'be cutting rates significantly' in 2025, 2026 as RBA 'confident' on inflation",
            title2:"Money markets predict ‘good chance’ of a rate cut by February",
            title3:"‘Narrow path’: RBA Governor speaks out after cash rate left on hold at 4.35 per cent"
        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-juan-soto_6771272.jpg?20241209102112',
            title: 'Sports',
            text: 'Catch up on live scores, thrilling matches, and the latest news in the world of sports.',
            title1:"Rashford among Man Utd stars available for transfer",
            title2:"LTA to ban transgender women from domestic female competitions",
            title3:"Brazilian tennis player becomes first male pro to come out publicly"

        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-tiktok-ban_6768565.jpg?20241206174824',
            title: 'Politics',
            text: "Understand the latest political events, elections, and global governance trends.",
            title1:"'Very symbolic and important' first meeting of chancellor and EU finance ministers since Brexit - Eurogroup president Paschal Donohoe says",
            title2:"Keir Starmer and Kemi Badenoch clash over immigration at PMQs",
            title3:"Russia tells citizens to avoid travel to the West - and responds to Donald Trump's call for Ukraine ceasefire"
        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-taylor-swift-eras-tour_6771083.jpg?20241209000914',
            title: 'Entertainment',
            text: "Dive into the world of movies, music, celebrities, and all things entertainment.",
            title1:"Jim Carrey quips he took role in Sonic The Hedgehog 3 because he 'needed the money'",
            title2:"New Eurovision rules announced to 'protect' artists after controversies at competition",
            title3:"Jamie Foxx says he suffered a brain bleed which led to a stroke in 2023"
        },
        {
            image: 'https://e3.365dm.com/24/12/1600x900/skynews-artemis-nasa_6768058.jpg?20241206091047',
            title: 'Science',
            text: "Discover groundbreaking discoveries and news in the world of science and innovation.",
            title1:"Why is fluoride in drinking water controversial",
            title2:"How to see the Geminid meteor shower in the next few days",
            title3:"Australian-led project to grow plants in space scheduled for takeoff in 2025"
        },
        {
            image: 'https://content.api.news/v3/images/bin/da195c495913eeb30e89e700374b9bb8?width=1024',
            title: 'Lifestyle',
            text: "Find inspiration for living well, from fashion and health to travel and culture.",
            title1:"Sweden’s ‘soft girl’ trend that celebrates women quitting work",
            title2:"Why 'doing nothing, intentionally' is good for us",
            title3:"Why Gen Z are 'dry tripping'"
        },
        
    ];

    return (
        <div className="flex flex-col gap-[30px] sm:grid sm:grid-cols-3 sm:gap-x-[50px] sm:gap-y-[50px]">

            {card.map((item, index) => (
                <div
                    key={index}
                    className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-auto" // Highlighted change
                >
                    <img className="w-full" src={item.image} alt={item.title} />

                    <div className="px-6 py-4 flex-grow"> {/* Highlighted change */}

                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base line-clamp-4"> {/* Highlighted change */}
                            {item.text}
                        </p>
                        <div className="font-bold text-xl mb-2">Recent Posts</div>
                        <div className="w-[300px] h-auto  rounded mt-[20px] ml-[0px]">
            
            <div className="">
               <ul className="list-disc">
                <a href=""><li>{item.title1}
                </li></a>
                <a href="">
                <li>{item.title2}
                </li>
                </a>
                <a href="">
                <li>{item.title3}
                </li>
                </a>
                

               </ul>
             
            </div>
        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2 mt-auto"> {/* Highlighted change */}
                        <a href="">
                            <div className="max-w-[100px]">
                                <span className="text-black">View All Posts</span>
                                <hr className="border-black border-t-[3px]" />
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}