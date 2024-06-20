import React, { useState } from 'react'
import HomeLayout from '../../Layouts/HomeLayout'
import axiosInstance from '../../Helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { changePassword, getUserData } from '../../Redux/Slices/AuthSlice';

function ChangePassword() {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleSubmit =async (event) => {
      event.preventDefault();
      // Handle password change logic here

      if(!oldPassword || !newPassword) {
        toast.error("All fields are mandatory");
        return;
      }
     
      await dispatch(changePassword({oldPassword,newPassword}));
      await dispatch(getUserData())

      navigate('/') 

    };

  return (
    <HomeLayout>
    <div className="flex items-center justify-center px-6 py-8   border-1 border-slate-800 flex-col bg-gradient-to-tr from-slate-950 to-slate-700">
     <h1 className="text-4xl  font-bold text-cyan-600 mt-5 mb-4">Change Password</h1>
      <div className=" p-6 rounded-lg w-full max-w-md bg-slate-800 shadow-inner shadow-gray-500">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              placeholder='Enter Old Password'
              onChange={(e) => setOldPassword(e.target.value)}
              className="py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder='Enter New Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="py-3 px-2 text-white text-[18px] border-none outline-none focus:ring-1 focus:duration-300 w-full"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 text-center w-full"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
    </HomeLayout>
  )
}

export default ChangePassword
