import aboutMainImage from "../Assets/aboutMainImage.png";
import InstructorDetails from "../Components/InstructorDetails.jsx";
import { instructorData } from "../Constants/InstructorData.js";
import HomeLayout from "../Layouts/HomeLayout";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function AboutUs() {

    return (
        <HomeLayout>
            <div className=" bg-gradient-to-tl from-slate-950 to-slate-700 flex flex-col px-6 py-8 text-white">
                <div className="flex w-full items-center px-2 md:px-7">
                    <section className="w-1/2 ">
                        <h1 className="md:text-6xl text-3xl font-semibold flex w-[200%] md:w-[100%] flex-wrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
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
                {/* Our instructor section */}
            <div className=" bg-slate-800 rounded-lg border-dashed border-2 py-5 px-4 border-gray-400 mt-6 md:mt-10">
                <div className=" px-6 py-3 text-white">
                <h1 className=" text-4xl md:text-5xl font-bold text-gray-300"> <span className=" text-gray-600">Meet Your</span> <br /> Instructors who are here to Make this Possible</h1>
                   <p className=" font-bold text-[17px] text-gray-400 mt-2">Discover brilliance in code with our expert instructors. <br /> Passionate mentors dedicated to fueling your coding journey at SkillRize.</p>
                </div>
                <div className=" px-6 py-3 rounded-lg">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                
                {
                    instructorData.map((instructor)=>(
                        <SwiperSlide>
                            <InstructorDetails image={instructor.image} name={instructor.name} description={instructor.description} about={instructor.about} />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
                </div>
            </div>
        </div>    
        </HomeLayout>  
    );
}   


export default AboutUs;