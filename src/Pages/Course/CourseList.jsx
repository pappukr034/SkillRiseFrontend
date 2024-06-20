import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

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
        </HomeLayout>
    );

}

export default CourseList;