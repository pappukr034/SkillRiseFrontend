import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import InstructorDetails from "../../Components/InstructorDetails";
import { instructorData } from "../../Constants/InstructorData";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { faqs } from "../../Constants/Faq";
import Faq from "../../Components/Faq";
import { BsSearch } from "react-icons/bs";



function CourseList() {
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
            <div className=" bg-gradient-to-tl from-slate-950 to-slate-700  flex flex-col px-6 text-white mx-auto">
                   <div className=" flex w-full justify-between items-center bg-slate-800 mt-16 px-3 py-2 gap-2 rounded-lg">
                       <BsSearch />
                       <input
                        type="text"
                        placeholder="Search cources....."
                        className=" w-full py-3 px-3 rounded-lg bg-slate-800 font-semibold outline-none focus:border focus:border-orange-300 "
                        />
                   </div>
                    <h1 className="text-center text-5xl lg:text-6xl font-semibold mb-5 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mt-10">
                    Explore the courses made by{' '}
                    <span className="font-bold mt-1 text-yellow-500"> <br />Industry experts</span>
                    </h1>
                <div className="mb-10 flex flex-wrap gap-14 mt-3">
                    {courseData?.map((element) => {
                        return <CourseCard key={element._id} data={element} />
                    })}
                </div>
            </div>

            {/* Instructor details */}
            <div className=" mx-6 bg-slate-800 rounded-lg border-dashed border-2 py-5 px-4 border-gray-400 mt-6 md:mt-10">
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

            {/* Faq */}
            <div className=" mx-6 bg-gradient-to-tr from-slate-950 to-slate-800 mt-10 py-2 sm:p-6 lg:p-8 px-6 rounded-lg  ">
            <h2 className="text-3xl mt-8 font-extrabold text-gray-200 ">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-5 py-3">
                {faqs.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
          </div>
            
        </HomeLayout>
    );

}

export default CourseList;