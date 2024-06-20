import React, { useState } from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../Redux/Slices/AuthSlice'


function ResetPassword() {


    const navigate=useNavigate()
    const dispatch=useDispatch()

    const resetToken=useSelector((state)=> state?.auth?.resetToken)

    const [password,setPassword]=useState("")

    const handleReset=async function (e){
        e.preventDefault();

        const res=await dispatch(resetPassword([resetToken,{password}]))

        if(res?.payload?.success){
            setPassword("")
            navigate('/')
        }
    }

  return (
    <HomeLayout>
    <div className='flex items-center justify-cente bg-gradient-to-tl from-slate-950 to-slate-700 px-2 py-6 '>
           
       <div className=' rounded-md mt-8 w-full flex justify-center items-center px-3  '>
            <form noValidate className='flex flex-col justify-center my-4 text-white  shadow-[0_0_10px_black] w-full rounded-bl-md rounded-br-md md:w-[50%] px-2 py-4 '>


                <div className=' flex py-3 px-2 justify-between items-center bg-slate-800 '>
                     <BiLeftArrowAlt
                     onClick={()=>navigate(-1)}
                     className=' text-yellow-500 cursor-pointer  rounded-full p-1 text-3xl'
                      />
                     <h1 className=' font-semibold'>Reset your password ?</h1>
                </div>

                <div className=' py-4 flex justify-center items-center'>
                   
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password" className='font-semibold'> Password<sup className=' text-red-500 mt-2'>*</sup> </label>
                    <input 
                        type="password" 
                        required
                        name="password"
                        id="password"
                        placeholder="Enter your new Password.."
                        className=" py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button
                onClick={handleReset} 
                type="submit" 
                className='mt-6 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg text-black cursor-pointer bg-blue-500 hover:bg-blue-600  '>
                       Reset
                    </button>
               
                </form>
        </div>
  </div>
    </HomeLayout>
  )
}

export default ResetPassword
