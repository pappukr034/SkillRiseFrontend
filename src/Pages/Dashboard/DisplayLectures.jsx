import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourseLecture, editCourseLectures, getCourseLectures } from "../../Redux/Slices/LectureSlice";
import { BsPlus } from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

function Displaylectures() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state} = useLocation();
    const {lectures} = useSelector((state) => state.lecture);
    const {role} = useSelector((state) => state.auth);

    console.log("All fetche lectute  : ",lectures)
     
    const [currentVideo, setCurrentVideo] = useState(0);

    async function onLectureDelete(courseId, lectureId) {
        console.log(courseId, lectureId);
        await dispatch(deleteCourseLecture({courseId: courseId, lectureId: lectureId}));
        await dispatch(getCourseLectures(courseId));
    }

    async function handleLectureEdite(courseId,lectureId){
        await dispatch(editCourseLectures({courseId:courseId,lectureId:lectureId}))
        await dispatch(getCourseLectures(courseId));
    }

    useEffect(() => {
        console.log(state);
        if(!state) navigate("/courses");
        dispatch(getCourseLectures(state._id));
    }, []);

    return (
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center py-10 text-wihte w-full bg-gradient-to-tr from-slate-900 to-slate-700">
                <div className="text-center text-[3rem] font-semibold text-white ">
                     {state?.title}
                </div>

                {(lectures && lectures.length > 0 ) ?  
                    (<div className="flex  justify-center gap-10 w-full flex-col md:flex-row h-screen">
                    {/* left section for playing videos and displaying course details to admin */}
                   <div className="space-y-5 p-2 rounded-lg shadow-[0_0_10px_black] w-full  md:w-[60%] px-3 ">
                        <video 
                            src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                            className=" md:w-[100%] h-[20rem] w-[23rem] md:h-[60%] rounded-tl-lg rounded-tr-lg "   
                            controls
                            disablePictureInPicture
                            muted
                            controlsList="nodownload"

                        >
                        </video>    
                        <div>
                            <h1 className=" font-bold text-2xl text-yellow-500">
                                {lectures && lectures[currentVideo]?.title}
                            </h1>
                            <p className=" text-gray-400 mt-2">
                                {lectures && lectures[currentVideo]?.description}
                            </p>
                        </div>
                   </div>

                   {/* right section for displaying list of lectres */}
                   <ul className=" overflow-auto w-full px-4 rounded-lg shadow-[0_0_10px_black] space-y-4 py-2 md:w-[30%]">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>Modules</p>
                            {role === "ADMIN" && (
                                <button onClick={() => navigate("/course/addlecture", {state: {...state}})} className="px-4 py-2 bg-green-400 hover:bg-green-600 duration-300 text-black rounded-md font-semibold text-sm flex items-center">
                                    <BsPlus className=" mr-3 text-white text-xl" />
                                    Add Lecture
                                </button>
                            )}
                        </li> 
                        {lectures && 
                            lectures.map((lecture, idx) => {
                                return (
                                    <li className="space-y-2  rounded-md px-2 py-3 bg-gradient-to-tr from-slate-700 to-slate-950" key={lecture._id} >
                                        <p className="cursor-pointer font-semibold" onClick={() => setCurrentVideo(idx)}>
                                            <span>
                                                {" "} Lecture {idx + 1} : {" "}
                                            </span>
                                            {lecture?.title}
                                        </p>
                                        <div className=" flex justify-between items-center">
                                        {role === "ADMIN" && (
                                            <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="btn-accent px-2 py-1  rounded-md font-semibold  text-sm flex gap-2 items-center bg-red-300 hover:bg-red-500 duration-300">
                                                <AiFillDelete className=" text-red-400" />
                                                Delete
                                            </button>
                                        )}
                                        {role === "ADMIN" && (
                                            <button 
                                            onClick={() => navigate("/course/editlecture", {state: {...state,lectureId:lecture?._id}})}
                                             className="btn-accent px-2 py-1  rounded-md font-semibold duration-200 text-sm flex gap-2 items-center bg-cyan-400">
                                               <AiFillEdit className=" text-yellow-500" />
                                                Edit Lecture
                                            </button>
                                        )}
                                        </div>
                                    </li>
                                )
                            })    
                        }
                   </ul>
                </div>) : (
                    role === "ADMIN" && (
                        <button onClick={() => navigate("/course/addlecture", {state: {...state}})} className=" px-4 py-2 text-black bg-green-400 hover:bg-green-600 duration-300 rounded-md font-semibold text-sm">
                            Add new lecture
                        </button>
                    )
                )}
            </div>
        </HomeLayout>
    );
}

export default Displaylectures;