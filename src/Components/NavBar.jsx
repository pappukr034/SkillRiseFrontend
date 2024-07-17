import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'


function NavBar() {

    const userData=useSelector(state=> state?.auth?.data)
    const navigate=useNavigate()

    const dispatch=useDispatch()

    // for checking if user is logged in
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    // for displaying the options acc to role
    const role = useSelector((state) => state?.auth?.role);

    async function handleLogout(e) {
        e.preventDefault();

        const res = await dispatch(logout())
        if(res?.payload?.success)
        navigate("/");
    }

  return (
    <div className='w-full'>
      <div 
      className='w-full bg-slate-900 h-[10vh] flex justify-between px-2 items-center cursor-pointer'>
         <div className=' w-full'>
            <div className='hidden lg:block w-full'>
                   <ul className=" w-full  flex text-white justify-center items-center text-xl gap-3 space-x-2 ">
    
                        <li className=' hover:text-orange-500 duration-300'>
                            <Link to='/' >Home</Link>
                        </li>
                        
                        <li className=' hover:text-orange-500 duration-300'>
                            
                            {
                                isLoggedIn && role === 'ADMIN' && (
                                    <p>
                                        <Link to="/admin/dashboard"> Admin DashBoard</Link>
                                    </p>
                                )
                            }
                        </li>


                        <li className=' hover:text-orange-500 duration-300'>
                            <Link to='/courses'>All Courses</Link>
                        </li>
                        <li className=' hover:text-orange-500 duration-300'>
                            
                            {
                                isLoggedIn && role === 'ADMIN' && (
                                    <p>
                                        <Link to="/course/create"> Create new courses</Link>
                                    </p>
                                )
                            }
                        </li>

                        <li className=' hover:text-orange-500 duration-300'>
                            <Link to="/contact">Contact Us</Link>
                        </li>

                        <li className=' hover:text-orange-500 duration-300'>
                            <Link to="/about">About Us</Link>
                        </li>

                        {/* {
                            !isLoggedIn? (
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 mb-2 lg:mb-0 hover:bg-blue-700 lg:text-xl">
                                Signup
                                </button> 
                            ):(
                                <button
                                onClick={handleLogout}
                                 className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2 mb-2 lg:mb-0 hover:bg-blue-700 lg:text-xl">
                                Logout
                                </button> 
                            )
                        }    */}

                    </ul>
            </div>
        </div>


        <div className=''>
        {
           userData?.avatar?.secure_url &&
          (  <img 
            onClick={()=> navigate('/user/profile')}
            className=' rounded-full'
            src={userData?.avatar?.secure_url} alt="profile image" width='50px' />)
          }
       
        </div>

      </div>
    </div>
  )
}

export default NavBar
