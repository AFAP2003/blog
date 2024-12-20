import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../../components/carousel";
import { Footer } from "../../components/footer";
import { NewsFive } from "../../components/paragraphs";
import { PopularNews } from "../../components/cards";
import { Navbar } from "@/app/components/navbar";


export default function detailPageFive(){
    return(
        <>
            <Navbar/>
         <DetailBanner smWidth="sm:w-[800px]" image="https://e3.365dm.com/24/12/1600x900/skynews-willow-quantum_6772127.jpg?20241210095502" title="Google unveils 'astonishing' quantum computing chip called Willow
"/>
         <div className="flex sm:flex-row flex-col ">
         <NewsFive/>
        <div className="flex flex-col">
        <Author  image="https://e3.365dm.com/23/10/768x432/2b94ca4d153b627df0d8ec542241b700fa4f1ef7234ac9d81cd981760c00e738_6311982.jpg?20231007084721=" 
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