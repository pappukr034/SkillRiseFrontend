import {AiFillCloseCircle, AiFillHome} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer';
import { logout } from '../Redux/Slices/AuthSlice';
import NavBar from '../Components/NavBar';

import { FaHome } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosCreate } from "react-icons/io";
import { RiFolderVideoFill } from "react-icons/ri";







function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    // for displaying the options acc to role
    const role = useSelector((state) => state?.auth?.role);

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = '0';
    }

    async function handleLogout(e) {
        e.preventDefault();

        const res = await dispatch(logout());
        if(res?.payload?.success)
        navigate("/");
    }

    return (
        <div className=" w-full bg-slate-900 sticky"> 
        <div className="drawer absolute left-0 z-50 w-fit">
            <input className="drawer-toggle" id="my-drawer" type="checkbox" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="cursor-pointer relative">
                    <FiMenu 
                        onClick={changeWidth}
                        size={"32px"}
                        className="font-bold text-white m-4"
                    />
                </label>
            </div>
            <div className="drawer-side w-0 text-red-500">
                <label htmlFor="my-drawer" className="drawer-overlay">
                </label>
                <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-base-content relative">
                    <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={25} />
                        </button>
                    </li>

                    <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                    <FaHome className=' text-2xl text-blue-600' />
                    <Link to="/">Home</Link>
                    </div>


                    {isLoggedIn && role === 'ADMIN' && (
                         <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                         <GrUserAdmin className=' text-2xl text-pink-600' />
     
                         <Link to="/admin/dashboard">Admin Dashboard</Link>
                         </div>
                    )}
                    {isLoggedIn && role === 'ADMIN' && (
                       <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                       <IoIosCreate className=' text-2xl text-rose-600' />
   
                       <Link to="/course/create">Create course</Link>
                       </div>
                    )}

                    <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                    <RiFolderVideoFill  className=' text-2xl text-lime-400'  />

                    <Link to="/courses">All courses</Link>
                    </div>

                   

                    <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                    <IoMdContacts className=" text-2xl text-orange-400" />

                    <Link to="/contact">Contact</Link>
                    </div>

                    <div className=' flex justify-start items-center gap-2 hover:bg-gray-500 p-2 rounded-md'>
                    <FcAbout className="text-2xl" />

                    <Link to="/about">About</Link>
                    </div>

                    {!isLoggedIn && (
                        <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full bg-white'>
                                    <Link to="/login">Login</Link>
                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-blue-500'>
                                    <Link to="/signup">Signup</Link>
                                </button>
                            </div>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li className="absolute bottom-4 w-[90%]">
                            <div className="w-full flex items-center justify-center">
                                <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full bg-blue-500 '>
                                    <Link to="/user/profile">Profile</Link>
                                </button>
                                <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-red-500  '>
                                    <Link onClick={handleLogout}>Logout</Link>
                                </button>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>

        <NavBar />
        
        { children }

        <Footer />
        </div>
    );
}

export default HomeLayout;