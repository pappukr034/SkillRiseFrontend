import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";

function CreateCourse() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        createdBy: "",
        description: "",
        thumbnail: null,
        previewImage: ""
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setUserInput({
                    ...userInput,
                    previewImage: this.result,
                    thumbnail: uploadedImage
                })
            })
        }
    }

    function handleUserInput(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All fields are mandatory");
            return;
        }


        const response = await dispatch(createNewCourse(userInput));
        // console.log("Dispach response /n",response)
        if(response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                createdBy: "",
                description: "",
                thumbnail: null,
                previewImage: ""
            });
        }
        navigate('/courses')

    }

    return (
        <HomeLayout>
            <div className="flex items-center px-6 py-8 justify-center  bg-gradient-to-tl from-slate-950 to-slate-700 w-full">
                <form
                    onSubmit={onFormSubmit}
                    noValidate
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative "
                >
                    
                    <Link onClick={()=> navigate(-1)} className="absolute top-5 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link>

                    <h1 className="text-center text-yellow-400 text-2xl font-bold">
                        Create New Course
                    </h1>

                    <main className="flex flex-col ">
                        <div className="gap-y-6 ">
                            <div className=" py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-md ">
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {userInput.previewImage ? (
                                        <img 
                                            className="w-full h-44 m-auto border "
                                            src={userInput.previewImage}
                                        />
                                    ): (
                                        <div className="w-full h-44 m-auto flex items-center justify-center border rounded-md px-2">
                                            <h1 className="">Upload your course thumbnail</h1>
                                        </div>
                                    )}

                                </label>
                                <input 
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="" htmlFor="title">
                                    Course title <sup className=' text-red-500 mt-2'>*</sup>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-md"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label className="" htmlFor="createdBy">
                                    Course Instructor <sup className=' text-red-500 mt-2'>*</sup>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-md"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="" htmlFor="category">
                                    Course category <sup className=' text-red-500 mt-2'>*</sup>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full rounded-md"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="" htmlFor="description">
                                    Course description <sup className=' text-red-500 mt-2'>*</sup>
                                </label>
                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="  h-24 overflow-y-scroll resize-none border rounded-md py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full "
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                    </main>

                    <button type="submit" className="w-full py-2  font-semibold text-lg cursor-pointer bg-green-400 hover:bg-green-600 transition-all ease-in-out duration-300 rounded-md">
                        Create Course
                    </button>


                </form>
            </div>
        </HomeLayout>
    )
}

export default CreateCourse;