import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip } from "chart.js";
import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsPerson, BsTrash } from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import { LuBarChart } from "react-icons/lu";

import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourse, getAllCourses } from "../../Redux/Slices/CourseSlice";
import { getPaymentRecord } from "../../Redux/Slices/RazorpaySlice";
import { getStatsData } from "../../Redux/Slices/StatSlice";
ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { allUsersCount, subscribedCount } = useSelector((state) => state.stat);

    const { allPayments, monthlySalesRecord } = useSelector((state) => state.razorpay);


    const userData = {
        labels: ["Registered User", "Enrolled User"],
        fontColor: "white",
        datasets: [
            {
                label: "User Details",
                data: [allUsersCount, subscribedCount],
                backgroundColor: ["yellow", "green"],
                borderWidth: 1,
                borderColor: ["yellow","green"]
            },
        ]
    };

    const salesData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        fontColor: "white",
        datasets: [
            {
                label: "Sales / Month",
                data: monthlySalesRecord,
                backgroundColor: ["red"],
                borderColor: ["white"],
                borderWidth: 2
            }

        ]
    }

    const courses = useSelector((state) => state?.course?.courseData);

    async function onCourseDelete(id) {
        if(window.confirm("Are you sure you want to delete the course ? ")) {
            const res = await dispatch(deleteCourse(id));
            console.log(res);
            if(res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }


    useEffect(() => {
        (
            async () => {
                await dispatch(getAllCourses());
                await dispatch(getStatsData());
                await dispatch(getPaymentRecord())
            }
        )()
    }, [])

    return (
 <HomeLayout>
    <div className=" overflow-hidden w-full bg-gradient-to-tr from-slate-950 to-slate-700 flex flex-col flex-wrap text-white px-6 py-8">

            <h1 className=" relative md:left-1/3 text-3xl font-semibold text-yellow-500 mt-3 md:text-5xl flex flex-wrap">
                Admin Dashboard
            </h1>

            <div className="flex w-full flex-col md:flex-row mt-20 flex-wrap">
                <div className="flex md:w-1/2  flex-col items-center shadow-lg rounded-md ">
                    <div className="">
                        <Pie className="" data={userData}/>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold">Registered Users</p>
                                <h3 className="text-4xl font-bold">{allUsersCount}</h3>
                            </div>
                            <FaUsers className="text-yellow-500 text-5xl"/>
                        </div>
                        <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold">Subscribed Users</p>
                                <h3 className="text-4xl font-bold">{subscribedCount}</h3>
                            </div>
                            <FaUsers className="text-green-500 text-6xl"/>
                        </div>
                    </div>
                </div>

                <div className="flex md:w-1/2 flex-col items-center gap-10 shadow-lg rounded-md ">
                    <div className="h-80 w-full relative">
                        <Bar  className="absolute bottom-0 h-80 w-full" data={salesData} />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold">Subscription Count</p>
                                <h3 className="text-4xl font-bold">{allPayments?allPayments.count:0}</h3>
                            </div>
                                <FaUsers className="text-yellow-500 text-5xl"/>
                            
                        </div>
                        <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold">Total Revenue</p>
                                <h3 className="text-4xl font-bold">{allPayments?allPayments.count * 499:0}</h3>
                            </div>
                            <GiMoneyStack className="text-green-500 text-5xl"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-8 flex flex-col items-center justify-center py-4 w-full overflow-auto  ">
                <div className="flex w-full  items-center justify-between py-2">
                    <h1 className="text-center text-3xl font-semibold">
                        Courses overview
                    </h1>

                    <button
                        onClick={() => {
                            navigate("/course/create")
                        }}
                        className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
                    >
                        Add Courses
                    </button>
                </div>
                <p className=" text-center mt-2 md:hidden">Move to the desktop mode to see course overview smoothly</p>

            <table className="table mt-5  flex justify-center items-center ">
                <thead>
                    <tr className=" bg-slate-950 overflow-auto text-yellow-400 ">
                        <th>S No</th>
                        <th>Course Title</th>
                        <th>Course Category</th>
                        <th>Instructor</th>
                        <th>Total Lectures</th>
                        <th>Description</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody className=" mt-5 ">
                    {courses?.map((course, idx) => {
                        return (
                            <tr key={course._id} className={`${idx%2==0?" bg-slate-900":" bg-slate-950"}`}>
                                <td>{idx+1}</td>
                                <td>
                                    <textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea>
                                </td>
                                <td>
                                    {course?.category}
                                </td>
                                <td>
                                    {course?.createdBy}
                                </td>
                                <td>
                                    {course?.numberOfLectures}
                                </td>
                                <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap ">
                                    <textarea
                                        value={course?.description}
                                        readOnly
                                        className="w-80 h-auto bg-transparent resize-none"
                                    >

                                    </textarea>
                                </td>
                                <td className="flex items-center gap-4">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                        onClick={() => navigate("/course/displaylectures", {state: {...course}})}
                                    >
                                        <BsCollectionPlayFill />
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                        onClick={() => onCourseDelete(course?._id)}
                                    >
                                        <BsTrash />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  </HomeLayout>
    );
}

export default AdminDashboard;