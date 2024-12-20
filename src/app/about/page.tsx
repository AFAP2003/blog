import { ButtonSubmit } from "../components/buttons"
import { AuthorAbout } from "../components/cards"
import { AboutBanner } from "../components/carousel"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"

export default function about() {
    return (
        <div className="">
            <Navbar />
            <AboutBanner />
            <div className="flex justify-center">
                <span className="text-black font-bold text-[30px] mt-[30px]">About</span>

            </div>
            <div className="mt-[30px] ml-[50px] sm:ml-0">
                <span className="text-black font-bold text-[20px] sm:ml-[300px]">Blog Story</span>
                <p className="w-[700px] sm:ml-[300px] max-w-[300px] sm:max-w-none">
                    "All News in One Place" was founded with a single goal in mind: to provide readers with access to the latest and most accurate news from around the world, all in one convenient location. Inspired by the need for reliable information in a rapidly changing world, the blog was launched to bridge the gap between sensationalism and authenticity. Over time, we have evolved into a trusted platform, expanding our reach and embracing new technologies to deliver news faster and more effectively.
                </p>
            </div>

            <div className="mt-[30px] ml-[50px] sm:ml-0">
                <span className="text-black font-bold text-[20px] sm:ml-[300px]">Mission and Vision</span>
                <p className="w-[700px] sm:ml-[300px] max-w-[300px] sm:max-w-none">
                    Our mission is to empower individuals with factual and timely news that informs and inspires. We believe in the power of knowledge and the importance of accessibility, ensuring our readers stay connected to the world around them.

                    Our vision is to become the go-to source for credible and diverse news, fostering a community that values truth, transparency, and integrity. We aim to uphold the highest journalistic standards while continuously innovating to meet the needs of our audience in an ever-evolving digital landscape.
                </p>
            </div>
            <div className="mt-[30px] ml-[50px] sm:ml-0">
                <span className="text-black font-bold text-[20px] sm:ml-[300px] ">Our Values</span>
                <div className="sm:ml-[300px] max-w-[300px] sm:max-w-none">
                    <ul className="list-disc">
                        <li><span className="font-bold ">Accuracy:</span> Delivering news that is thoroughly researched and verified</li>
                        <li><span className="font-bold">Transparency:</span> Being open about our sources and processes.
                        </li>
                        <li><span className="font-bold">Inclusivity:</span> Ensuring diverse perspectives are represented.
                        </li>
                        <li><span className="font-bold ">Innovation:</span> Embracing new technologies to enhance the reader experience.
                        </li>

                    </ul>
                </div>
            </div>
            <div className="sm:ml-[300px] mt-[30px] ml-[50px]">
                <span className="text-black font-bold text-[20px]">Meet Our Team</span>
                <div className="flex sm:flex-row flex-col sm:gap-[50px] ">
                    <AuthorAbout image="https://e3.365dm.com/23/10/768x432/2b94ca4d153b627df0d8ec542241b700fa4f1ef7234ac9d81cd981760c00e738_6311982.jpg?20231007084721="
                        name="Mickey Caroll" title="Science and Technology Reporter" text="Mickey Carroll is a science and technology reporter at Sky News, based in London. She covers a wide range of topics, including artificial intelligence, environmental issues, and technological innovations." />
                    <AuthorAbout image="https://e3.365dm.com/23/02/120x120/skynews-tomos-evans-wales-reporter_6064091.jpg?20230220170134"
                        name="Alexandra Barnes" title="Sports and Entertainment Reporter" text="Alexandra Barnes is a versatile journalist with a passion for sports and entertainment. Based in New York, she covers major sporting events and the latest in the entertainment industry. Her deep knowledge of both fields allows her to bridge the gap between athletics and pop culture, offering fresh insights and engaging stories." />
                    <AuthorAbout image="https://e3.365dm.com/24/01/120x120/skynews-ed-conway-economics-and-data-editor_6418565.jpg?20240111171126"
                        name="Ethan Reyes" title="Politics and Business Reporter" text="Ethan Reyes is a skilled reporter focusing on politics and business. Based in Washington, D.C., he provides in-depth coverage of political policies and their economic implications. Known for his analytical approach, Ethan breaks down complex issues to make them accessible to a wide audience." />
                </div>

            </div>
            <div className="flex sm:flex-row flex-col sm:ml-[300px] mb-[100px]">
            <div className="text-black flex flex-col sm:justify-center sm:items-center sm:mt-[100px] p-4 sm:p-0">
          <span className="font-bold self-center sm:self-auto" id="contact">Get In Touch</span>
          <span className="font-bold sm:text-[50px] text-[30px] self-center sm:self-auto">Contact Us</span>
          <form action="">

            <div className="flex flex-col sm:flex-row sm:gap-[10px] sm:mt-[20px]">
              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">First Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>

              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Last Name</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>


            </div>

            <div className="flex flex-col sm:flex-row sm:gap-[10px] sm:mt-[20px]">
              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Email</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>

              <div className="mt-[20px] sm:mt-[0px]">
                <label htmlFor="">Phone Number</label>
                <input type="text" id="first_name" className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[295px]" />

              </div>



            </div>
            <div className="mt-[20px]">
              <label htmlFor="countries" className="block mb-2  text-black">Select an option</label>
              <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[600px]">
                <option selected className="text-black">Choose a topic</option>

              </select>
            </div>

            <div>

              <label htmlFor="message" className="block mb-2 font-medium text-black mt-[20px]">Your message</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </div>
            <div className="mt-[20px]">
              <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
              <label htmlFor="default-checkbox" className="ms-2 font-medium  text-black">I accept the terms</label>
            </div>
            <div className="flex flex-row justify-center mt-[20px]">
              <ButtonSubmit />
            </div>

          </form>
        </div>
        <div className="sm:mt-[220px] mt-[50px] ml-[50px] max-w-[300px] flex flex-col gap-[30px]">
        <div className="flex flex-col ">
            <span className="font-bold text-[30px] text-center">Call us</span>
            <span>Call Our team Mon-Fri from 8am to 5pm</span>
            <a href="">
            <div className="flex gap-1">
            <img src="/phone-call.png" className="w-[15px] h-[15px] relative top-[5px]" alt="" />
            <span>+621234568910</span>

            </div>
            </a>
        </div>
        <div className="flex flex-col">
            <span className="font-bold text-[30px] text-center">Chat with us</span>
            <span>Speak to our friendly team via live chat</span>
           <a href="">
           <div className="flex gap-1">
            <img src="/email.png" className="w-[15px] h-[15px] relative top-[5px]" alt="" />
            <span>Message us on email</span>
            </div>
           </a>
           <a href="">
           <div className="flex gap-1">
            <img src="/dm.png" className="w-[15px] h-[15px] relative top-[5px]" alt="" />
            <span>Message us on instagram</span>
            </div>
           </a>

        </div>
        <div className="flex flex-col">
            <span className="font-bold text-[30px] text-center">Visit us</span>
            <span>Chat to us in person at our Jakarta HQ</span>
            <div className="flex gap-1">
                <img src="/location.png" className="w-[15px] h-[15px] relative top-[5px]" alt="" />
            <span>Pacific Century Place Tower Level 45 SCBD Lot 10, Jl. Jenderal Sudirman No.53, RT.5/RW.3</span>

            </div>
        </div>
        </div>
       
            </div>
        
        <Footer/>
        </div>
    )
}