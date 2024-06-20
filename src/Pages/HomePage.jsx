import { Link, useNavigate } from "react-router-dom";


import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    const navigate=useNavigate()
    return (
        <HomeLayout>
            <div className="min-h-screen flex items-center justify-center bg-slate-900  p-4">
            <div className="container min-h-screen mx-auto flex flex-col lg:flex-row items-center bg-slate-800 rounded-lg shadow-lg p-6">
                {/* Left Side: Text and Buttons */}
                <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-blue-600">Welcome to SkillRise</h1>
                <p className="text-gray-100 mb-6 lg:text-xl">
                    SkillRise is your ultimate platform to enhance your skills and achieve your educational goals. Join us today and take the first step towards a brighter future.
                </p>
                <div className=" flex gap-3">
                    <button onClick={()=> navigate('/courses')} className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 mb-2 lg:mb-0 hover:bg-blue-700 lg:text-xl font-thin duration-300">
                    Explore courses
                    </button>
                    <button onClick={()=>navigate('/about')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 lg:text-xl duration-300 font-bold">
                    Learn More
                    </button>
                </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                <img src="https://skillrise.org/sites/skillrise.org/files/2020-01/SkillRise_Long%402x.png" alt="SkillRise" className="rounded-lg shadow-md  h-[40vh] " />
                </div>
            </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;