import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import { login } from '../Redux/Slices/AuthSlice';
import { LuCrown } from "react-icons/lu";

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        isChaked:false,
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    async function onLogin(event) {
        event.preventDefault();
        if(!loginData.email || !loginData.password || loginData.isChaked) {
            toast.error("Please fill all the details");
            return;
        }

        
        // dispatch create account action
        const response = await dispatch(login(loginData));

        console.log("Response : ",response)
        
        if((response?.payload?.success)==true){
            console.log("Nagivate to Home page")
            setLoginData({
                email: "",
                password: "",
                isChaked:false
            });
            navigate('/')
        }
    }

    return (
        <HomeLayout>
        <div className='flex flex-col items-center justify-center bg-red-100  bg-gradient-to-tl from-slate-950 to-slate-700 px-2 py-6'>
                <div className=' mt-8'>
                    <h2 className=' text-3xl text-lime-300'>Hello, <br /> </h2>
                    <h1 className=' text-5xl text-lime-600 font-bold'>Welcome ! </h1>
                </div>
           <div className=' rounded-md mt-8 w-full flex flex-col md:flex-row'>
               <div className=' md:w-1/2'>
                    <img
                     className=' w-full rounded-tl-md rounded-tr-md'
                     src="https://images.pexels.com/photos/5647660/pexels-photo-5647660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 p-4 text-white  shadow-[0_0_10px_black] w-full rounded-bl-md rounded-br-md md:w-1/2'>
                    <div>
                       <LuCrown className=' text-2xl text-lime-400' />
                       <h1 className=' text-xl font-bold mt-1'>Welcome back !</h1>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-semibold'> Email<sup className=' text-red-500 mt-2'>*</sup> </label>
                        <input 
                            type="email" 
                            required
                            name="email"
                            id="email"
                            placeholder="Enter your email.."
                            className=" py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                            onChange={handleUserInput}
                            value={loginData.email}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-semibold'> Password <sup className=' text-red-500 mt-2'>*</sup> </label>
                        <input 
                            type="password" 
                            required
                            name="password"
                            id="password"
                            placeholder="Enter your password.."
                            className=" py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                            onChange={handleUserInput}
                            value={loginData.password}
                        />
                    </div>

                    <div className=' flex justify-between px-3 items-center underline py-1 text-lime-300 cursor-pointer duration-300'>
                    <div  className=' flex gap-2 items-center'>
                        <input
                         placeholder=''
                         className=' cursor-pointer'
                         type="checkbox" 
                         name="rememberMe" 
                         id="rememberMe" 
                         onChange={handleUserInput}
                         value={loginData.isChaked}
                         />
                        <label htmlFor="rememberMe">remember me</label>
                    </div>
                    <div
                     onClick={()=> navigate('/forgot-password')}
                    className=' hover:text-lime-400 text-lime-300 flex gap-2 items-center'>
                       Forgot Your Password
                    </div>
                    </div>

                    <button type="submit" className='mt-2 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg text-black cursor-pointer bg-gradient-to-tr from-yellow-400 to-lime-400 hover:bg-gradient-to-tr hover:from-lime-400 hover:to-yellow-400'>
                       Login
                    </button>

                    <p className="text-center">
                        Don't hanve an account ? <Link to="/signup" className='link mt-2 text-yellow-400 cursor-pointer'> Signup</Link>
                    </p>

                </form>
            </div>
      </div>
        </HomeLayout>
    );
}

export default Signup;