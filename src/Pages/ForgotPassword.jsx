import React, { useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { BsArrowBarLeft, BsLock } from 'react-icons/bs'
import { BiLeftArrow, BiLeftArrowAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../Redux/Slices/AuthSlice'
import toast from 'react-hot-toast'

function ForgotPassword() {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [email,setEmail]=useState("")

    const handleSubmit=async function(e){
       e.preventDefault();
       console.log("Email in handle sub : ",email)
       const res=await dispatch(forgotPassword({email}))
      
       console.log("forgot res ",res)
       if(res?.payload?.success){
         toast.success("Go to mail and reset password")
       }
    }
  return (
    <HomeLayout>
    <div className=' bg-gradient-to-tl from-slate-950 to-slate-700 px-2 py-6  flex w-full'>
           
       <div className=' w-full rounded-md mx-3  flex justify-center items-center flex-col md:flex-row px-3 my-7  py-5   '>
            <form noValidate className='flex flex-col justify-center gap-3 p-4 text-white  shadow-[0_0_10px_black] w-full rounded-bl-md rounded-br-md md:w-[50%]   '>


                <div className=' flex py-3 px-2 justify-between items-center bg-slate-800 md:w-[100%] '>
                     <BiLeftArrowAlt
                     onClick={()=>navigate(-1)}
                     className=' text-yellow-500 cursor-pointer  rounded-full p-1 text-3xl'
                      />
                     <h1 className=' font-semibold'>Forgot your password ?</h1>
                </div>

                <div className=' md:w-[100%]  py-4 flex justify-center items-center'>
                    <BsLock className=' text-gray-400 text-6xl md:text-9xl ' />
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='font-semibold'> Email<sup className=' text-red-500 mt-2'>*</sup> </label>
                    <input 
                        type="email" 
                        required
                        name="email"
                        id="email"
                        placeholder="Enter your email.."
                        className=" md:w-[100%]  py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <button 
                onClick={handleSubmit}
                type="submit" 
                className='mt-2 md:w-[100%]  transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg text-black cursor-pointer bg-gradient-to-tr from-yellow-400 to-lime-400 hover:bg-gradient-to-tr hover:from-lime-400 hover:to-yellow-400'>
                       submit
                    </button>
               
                </form>
        </div>
  </div>
    </HomeLayout>
  )
}

export default ForgotPassword
