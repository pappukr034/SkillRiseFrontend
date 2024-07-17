import { useNavigate } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsBarChart } from "react-icons/bs";



function CourseCard({ data }) {
    const navigate = useNavigate();

    // console.log("data ",data)

    return (
        <div
            onClick={() => navigate("/course/description", {state: {...data}})} 
            className="text-white bg-slate-900 w-[22rem] h-[470px] shadow-sm rounded-lg shadow-gray-500 cursor-pointer group  border border-gray-500 overflow-hidden hover:bg-gradient-to-tr hover:from-slate-900 hover:to-slate-700 hover:duration-300">
            <div className="overflow-hidden p-2 ">
                <img 
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out diration-300 hover:scale-105"
                    src={data?.thumbnail?.secure_url}
                    alt="course thumbnail"
                />
                <div className="p-3 space-y-1 ">
                    <h2 className="text-2xl font-bold line-clamp-2 text-gray-200 mt-2">
                        {data?.title}
                    </h2>
                    <div className=" py-2 flex justify-between items-center">
                        <p className="font-semibold flex justify-center items-center gap-4">
                            <span className="text-yellow-500 font-bold"><BiSolidCategoryAlt className=" text-2xl" />
                            </span>
                            <span>{data?.category}</span>
                        </p>
                        <p className="font-semibold flex justify-center items-center gap-4 ">
                            <span className="font-bold text-yellow-500 "><BiSolidVideos className=" text-2xl" />
                            </span>
                            <span>{data?.numberOfLectures}</span>
                        </p>
                    </div>
                        <p className="font-semibold">
                            <span className="text-yellow-500 font-bold">Instructor : </span>
                            {data?.createdBy}
                        </p>
                    <div className=" py-1">
                        <p className=" flex gap-2 justify-start items-center mb-4">
                          <BsBarChart className=" rounded-full bg-yellow-500 text-4xl text-white" />
                          Beginner to Advance
                        </p>
                    <button className=" bg-yellow-400 hover:bg-yellow-600 duration-300 text-white px-4 py-2 rounded-lg mr-2 mb-2 lg:mb-0  lg:text-xl w-full">
                        Explore courses
                   </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CourseCard;