import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { RiFolderVideoFill } from "react-icons/ri";
import { BsBarChart } from "react-icons/bs";

function CourseDescription() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const { role, data } = useSelector((state) => state.auth);

    // console.log("Role " ,role)
    // console.log("data " ,data)
    // console.log("satate " ,state)

    return (
        <HomeLayout>
            <div className=" px-6 text-white bg-gradient-to-tr from-slate-900 to-slate-800">

                <h1 className=" relative top-8 py-4 text-4xl text-center font-bold text-white md:text-6xl">Course overviwe</h1>
                <div className="flex flex-col md:gap-6 space-x-4 md:flex-row py-10 w-full">

                    <div className="space-y-5 mt-6 py-1 p-1 bg-cyan-300 rounded-md bg-gradient-to-bl from-slate-800 to-slate-950 lg:w-[40%]">
                        <img 
                            className="w-full h-64 rounded-md"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />

                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-between text-xl">


                                <div className=" w-full flex flex-col md:flex-row items-center md:justify-between px-2">
                                <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md '>
                                <RiFolderVideoFill  className=' text-2xl text-lime-400'  />

                                {state?.numberOfLectures}
                                </div>

                                <p className="font-semibold">
                                    <span className="text-yellow-500 font-bold">
                                        Mentor : {" "}
                                    </span>
                                    {state?.createdBy}
                                </p>

                                </div>
                            </div>

                            { role === "ADMIN" || data?.subscription?.status === "active" ? (
                                <button onClick={() => navigate("/course/displaylectures", {state: {...state}})} className=" text-xl rounded-md font-semibold px-5 py-3 w-full  transition-all ease-in-out bg-green-300 hover:bg-green-500 duration-300 text-black">
                                    Watch lectures
                                </button>
                                ) : (
                                    <button onClick={() => navigate("/checkout")} className="text-xl rounded-md font-semibold px-5 py-3 w-full  transition-all ease-in-out  bg-green-300 hover:bg-green-500 duration-300 text-black">
                                        Subscribe
                                    </button>
                                )

                            }
                        </div>                      

                    </div>

                    <div className="space-y-4 lg:w-[60%] text-xl mt-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-start">
                            {state?.title}
                        </h1>

                        <p className=" text-green-400 border-b border-orange-300 w-[170px] py-1">Course description </p>
                        <p className=" text-gray-300">{state?.description}</p>
                        <p className=" flex gap-2 justify-start items-center">
                          <BsBarChart className=" rounded-full bg-green-400 text-4xl text-white mt-2" />
                          Beginner to Advance
                        </p>
                        {

                        }
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;