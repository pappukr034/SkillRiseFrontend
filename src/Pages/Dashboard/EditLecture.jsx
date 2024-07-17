import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { editCourseLectures } from "../../Redux/Slices/LectureSlice";



function EditLecture() {


    const courseDetails = useLocation().state;
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log("Corse detals : ",courseDetails)

    const [userInput, setUserInput] = useState({
        courseId: courseDetails?._id,
        lectureId: courseDetails?.lectureId,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: ""
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    function handleVideo(e) {
        const video = e.target.files[0];
        const source = window.URL.createObjectURL(video);
        console.log("Vedio source url ",source);
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: source
        })
    }

    console.log("User Input inside Edit lecture ",userInput)

    async function handleEdit(e){
        e.preventDefault()
        const response=await dispatch(editCourseLectures({userInput}))

        if(response?.payload?.success) {
            navigate(-1);
            setUserInput({
                courseId: courseDetails?._id,
                lectureId: courseDetails?.lectureId,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            })
        }
    }



  return (
    <HomeLayout>
    <div className=" text-white flex flex-col items-center justify-center w-full mt-4  px-6 py-8">
        <div className="flex w-full flex-col gap-5 p-2 shadow-[0_0_10px_black]  rounded-lg ">
            <header className="flex items-center justify-center relative">
                <button 
                    className="absolute left-2 text-xl text-green-500"
                    onClick={() => navigate(-1)}
                >
                    <AiOutlineArrowLeft />
                </button>
                <h1 className="text-xl text-yellow-500 font-semibold">
                    Edit lecture
                </h1>
            </header>
            <form 
                 className="flex flex-col gap-3"
                 onSubmit={handleEdit}
            >
                <label htmlFor="title">Title</label>

                <input 
                    type="text"
                    name="title"
                    placeholder="Enter Title of the lecture"
                    onChange={handleInputChange}
                    className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-sm"
                    value={userInput.title}
                />
                <label htmlFor="description">Descrption</label>
                <textarea 
                    type="text"
                    name="description"
                    placeholder="Enter the description of the lecture"
                    onChange={handleInputChange}
                    className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-sm"
                    value={userInput.description}
                />
                {userInput.videoSrc ? (
                    <video 
                        muted
                        src={userInput.videoSrc}
                        controls 
                        controlsList="nodownload nofullscreen"
                        disablePictureInPicture
                        className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-sm"
                    >

                    </video>
                ) : (
                    <div className="h-48 border flex items-center justify-center cursor-pointer">
                        <label className="font-semibold text-cl cursor-pointer" htmlFor="lecture">Choose your video</label>
                        <input type="file" className="hidden" id="lecture" name="lecture" onChange={handleVideo} accept="video/mp4 video/x-mp4 video/*" />
                    </div>
                )}
                <button type="submit" className="btn py-1 font-semibold text-lg bg-green-400 hover:bg-green-600 duration-300 text-black">
                    Edit
                </button>
            </form>
        </div>
    </div>  
</HomeLayout>
  )
}

export default EditLecture
