import { Author, CardRecommendation } from "../../components/cards";
import { DetailBanner } from "../../components/carousel";
import { Footer } from "../../components/footer";
import { NewsSix } from "../../components/paragraphs";
import { PopularNews } from "../../components/cards";
import { Navbar } from "@/app/components/navbar";


export default function detailPageSix(){
    return(
        <>
            <Navbar/>
         <DetailBanner image="https://e3.365dm.com/23/09/1600x900/skynews-poundland-shop_6283516.jpg?20230913142842" title="Poundland takes £642m hit on 'challenges' amid budget threat
"/>
         <div className="flex sm:flex-row flex-col ">
         <NewsSix/>
        <div className="flex flex-col">
        <Author image="https://e3.365dm.com/24/01/120x120/skynews-ed-conway-economics-and-data-editor_6418565.jpg?20240111171126" 
         name="Ethan Reyes" title="Politics and Business Reporter" text="Ethan Reyes is a skilled reporter focusing on politics and business. Based in Washington, D.C., he provides in-depth coverage of political policies and their economic implications. Known for his analytical approach, Ethan breaks down complex issues to make them accessible to a wide audience."/>
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