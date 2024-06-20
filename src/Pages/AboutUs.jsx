import aboutMainImage from "../Assets/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Constants/CelebrityData";
import HomeLayout from "../Layouts/HomeLayout";

function AboutUs() {

    return (
        <HomeLayout>
            <div className=" bg-gradient-to-tl from-slate-950 to-slate-700 flex flex-col px-6 py-8 text-white mt-10">
                <div className="flex mt-3 w-full items-center px-2 md:px-7">
                    <section className="w-1/2 ">
                        <h1 className="md:text-6xl text-3xl font-semibold flex w-[200%] md:w-[100%] flex-wrap text-yellow-600">
                            Affordable, <br /> Practical and quality education
                        </h1>
                        <p className="text-xl text-gray-300 mt-4">
                            Our goal is to provide the affordable and quality education to the world. 
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.  
                        </p>
                    </section>

                    <div className="w-1/2 mt-16">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

                <h1 className=" text-6xl  text-center mt-10 font-medium">Course Instructor</h1>

                <div className="carousel w-1/2 m-auto my-16  py-3">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                            {...celebrity} 
                            key={celebrity.slideNumber} 
                            totalSlides={celebrities.length}
                            
                        />))}
                    
                </div>


            </div>
        </HomeLayout>  
    );
}   


export default AboutUs;