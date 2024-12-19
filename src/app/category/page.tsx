import { CardCategory } from "../components/cards"
import { Carousel } from "../components/carousel"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer";


export default function Category(){
    return(
        <>
          <div>

<Navbar/>
<Carousel/>
<div className="flex justify-center p-4">
        <CardCategory/>
        </div>

        <Footer/>
        </div>
       
        </>
      
       
    )
}