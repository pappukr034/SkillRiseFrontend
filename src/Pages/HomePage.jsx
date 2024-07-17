import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { instructorData } from "../Constants/InstructorData.js";

import HomeLayout from "../Layouts/HomeLayout";
import InstructorDetails from "../Components/InstructorDetails.jsx";

import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../Redux/Slices/CourseSlice.js";
import CourseCard from "../Components/CourseCard.jsx";



function HomePage() {
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const {courseData} = useSelector((state) => state.course);

    async function loadCourses() {
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourses();
    }, []);
    return (
        <HomeLayout>
            <div className="flex mt-10 flex-col lg:flex-row items-center bg-slate-800 rounded-lg shadow-lg p-6 mx-6">
                {/* Left Side: Text and Buttons */}
                <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-blue-600">Welcome to SkillRise</h1>
                <p className="text-gray-100 mb-6 text-[17px] lg:text-xl">
                    SkillRise is your ultimate platform to enhance your skills and achieve your educational goals. Join us today and take the first step towards a brighter future.
                </p>
                <div className=" flex justify-between">
                    <button onClick={()=> navigate('/courses')} className="bg-blue-600 text-white rounded-lg mr-2 mb-2 lg:mb-0 hover:bg-blue-700 lg:text-xl font-thin duration-300 px-6 py-4">
                    Explore courses
                    </button>
                    <button onClick={()=>navigate('/about')} className="bg-gray-300 text-gray-800 px-6 py-1 rounded-lg hover:bg-gray-400 lg:text-xl duration-300 font-thin">
                    Learn More
                    </button>
                </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                <img src="https://skillrise.org/sites/skillrise.org/files/2020-01/SkillRise_Long%402x.png" alt="SkillRise" className="rounded-lg shadow-md  h-[40vh] " />
                </div>
            </div>

            <div className=" flex justify-center items-center w-[80%] h-[2px] font-thin bg-gray-500 mt-20 ml-10 md:ml-28 shadow-inner"></div>
            
            {/* Course listing */}

            <div className=" mx-6 py-4 bg-gradient-to-tl from-slate-950 to-slate-700  flex flex-col px-6 text-white mt-12 rounded-lg">
                    <h1 className="text-center text-5xl lg:text-6xl font-semibold mb-5 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-10">
                    Explore our courses
                    </h1>
                <div className="mb-10 flex flex-wrap gap-14 mt-3">
                    {courseData?.map((element) => {
                        return <CourseCard key={element._id} data={element} />
                    })}
                </div>     
            </div>

            <div className=" flex justify-center items-center w-[80%] h-[2px] font-thin bg-gray-500 mt-20 ml-10 md:ml-28 shadow-inner"></div>

            {/* Our instructor section */}
            <div className=" mt-6 mx-6 md:mt-10">
                <div className=" px-6 py-3 text-white">
                   <h1 className=" text-4xl md:text-5xl font-bold text-gray-300"> <span className=" text-gray-500">Meet Your</span> <br /> Instructors who are here to Make this Possible</h1>
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


            <div className=" flex justify-center items-center w-[80%] h-[2px] font-thin bg-gray-500 mt-20 ml-10 md:ml-28 shadow-inner"></div>

             {/* Social meadia section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 border-b-2 border-gray-500 p-6 rounded-lg shadow-lg mt-12 px-5 mx-6 py-6 h-[250px]">
            <div className="md:w-2/3 mb-4 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-2 mt-2">Follow Us</h2>
                <p className="text-gray-400 mt-2 md:text-[19px]">
                Stay connected with us through social media! Follow us to get the latest updates and news.
                </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end space-x-4 mt-4">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className=" bg-gray-400 rounded-full p-2 hover:bg-gray-600 hover:duration-300 hover:scale-110">
                <svg className="w-6 h-6 md:w-12 md:h-12 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.349C0 23.404.595 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.243H17.77c-1.397 0-1.667.663-1.667 1.635v2.142h3.334l-.435 3.696h-2.899V24h5.673c.73 0 1.325-.596 1.325-1.325V1.326C24 .595 23.405 0 22.675 0z"/></svg>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className=" bg-gray-400 rounded-full p-2 hover:bg-gray-600 hover:duration-300 hover:scale-110">
                <svg className="w-6 h-6 md:w-12 md:h-12 text-blue-400 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.825.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.194a4.918 4.918 0 00-8.384 4.482A13.944 13.944 0 011.671 3.15a4.916 4.916 0 001.523 6.556A4.897 4.897 0 01.96 9.287v.06a4.916 4.916 0 003.946 4.818 4.908 4.908 0 01-2.224.085 4.923 4.923 0 004.6 3.417 9.868 9.868 0 01-6.115 2.105c-.398 0-.79-.023-1.175-.068a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z"/></svg>
                </a>
                <a href="https://www.instagram.com/_pappu_1108?igsh=MTJtMmpzdW51OTg5Ng==" target="_blank" rel="noopener noreferrer" className=" bg-gray-400 rounded-full p-2 hover:bg-gray-600 hover:duration-300 hover:scale-110">
                <svg className="w-6 h-6 md:w-12 md:h-12 text-pink-500 hover:text-pink-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.7 0 8.292.015 7.052.073 5.707.133 4.383.369 3.218 1.536c-1.165 1.165-1.401 2.489-1.461 3.834C1.85 8.292 1.835 8.7 1.835 12c0 3.3.015 3.708.073 4.948.06 1.345.296 2.669 1.461 3.834 1.165 1.165 2.489 1.401 3.834 1.461 1.24.058 1.648.073 4.948.073 3.3 0 3.708-.015 4.948-.073 1.345-.06 2.669-.296 3.834-1.461 1.165-1.165 1.401-2.489 1.461-3.834.058-1.24.073-1.648.073-4.948 0-3.3-.015-3.708-.073-4.948-.06-1.345-.296-2.669-1.461-3.834-1.165-1.165-2.489-1.401-3.834-1.461C15.708.015 15.3 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 106.162 6.162A6.169 6.169 0 0012 5.838zm0 10.162a4 4 0 114-4 4.005 4.005 0 01-4 4z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/pappu034/" target="_blank" rel="noopener noreferrer" className=" bg-gray-400 rounded-full p-2 hover:bg-gray-600 hover:duration-300 hover:scale-110">
                <svg className="w-6 h-6 md:w-12 md:h-12 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zm-1.765-13.03a2.03 2.03 0 11.002-4.059 2.03 2.03 0 01-.002 4.059zM20.452 20.45h-3.53v-5.673c0-1.352-.024-3.09-1.88-3.09-1.882 0-2.172 1.464-2.172 2.984v5.78h-3.53V9h3.388v1.56h.049c.47-.893 1.616-1.83 3.326-1.83 3.56 0 4.216 2.342 4.216 5.385v6.335h-.003z"/></svg>
                </a>
            </div>
            </div>

        </HomeLayout>
    );
}

export default HomePage;