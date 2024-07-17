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

    // console.log("All fetche lectute  : ",lectures)
    // console.log("state : ",state)
     
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
            <div className="flex flex-col items-center justify-center w-full bg-gradient-to-tr from-slate-900 to-slate-800">
                <div className="text-center mt-10 text-[3rem] font-semibold text-white ">
                     {state?.title}
                </div>

                {(lectures && lectures.length > 0 ) ?  
                    (<div className="flex  justify-center w-full flex-col md:flex-row ">
                    {/* left section for playing videos and displaying course details to admin */}
                   <div className="rounded-lg py-4 w-full md:w-[70%] px-3 ">
                       <div className=" bg-slate-800 rounded-lg px-2 py-4"> 
                           <video 
                                src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                                className="h-[23rem] w-[23rem] md:w-[50rem] md:h-[30rem] rounded-xl "   
                                controls
                                disablePictureInPicture
                                muted

                            >
                            </video>    
                            <div>
                                <h1 className=" font-bold text-2xl text-yellow-500 mt-2">
                                    {lectures && lectures[currentVideo]?.title}
                                </h1>
                                <p className=" text-[17px] text-gray-400 mt-2 ">
                                    {lectures && lectures[currentVideo]?.description}
                                </p>
                            </div>
                       </div>
                   </div>

                   {/* right section for displaying list of lectres */}
                   <ul className="w-full rounded-lg  space-y-4 md:w-[30%] bg-slate-900 px-3 py-4 mx-2 my-6">
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
                                        <p className="cursor-pointer font-semibold text-white" onClick={() => setCurrentVideo(idx)}>
                                            <span >
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