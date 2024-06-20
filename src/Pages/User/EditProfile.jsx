import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";

function EditProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        previewImage: "",
        fullName: "",
        avatar: undefined,
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setData({
                    ...data,
                    previewImage: this.result,
                    avatar: uploadedImage
                })
            })
        }
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log("Data send to Server",data);
        if(!data.fullName || !data.avatar) {
            toast.error("All fields are mandatory");
            return;
        }
        if(data.fullName.length < 5) {
            toast.error("Name cannot be of less than 5 characters");
            return;
        }

        const formData=new FormData()
        formData.append('fullname',data.fullName)
        formData.append('avatar',data.avatar)
       const res= await dispatch(updateProfile(formData));

        if(res?.payload?.success){
            dispatch(getUserData())
            navigate('/user/profile')
            setData({
                previewImage: "",
                fullName: "",
                avatar: undefined,
                userId: useSelector((state) => state?.auth?.data?._id)
            })
        }

    }

    return (
        <HomeLayout>
            <div className="flex bg-gradient-to-tr from-slate-950 to-slate-700 items-center justify-center px-6 py-8">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-3xl font-semibold">Edit profile</h1>
                    <label className="cursor-pointer" htmlFor="image_uploads">
                        {data.previewImage ? (
                            <img 
                                className="w-28 h-28 rounded-full m-auto"
                                src={data.previewImage}

                            />
                        ): (
                            <BsPersonCircle className="w-28 h-28 rounded-full m-auto" />
                        )}
                    </label>
                    <input 
                        onChange={handleImageUpload}
                        className="hidden"
                        type="file"
                        id="image_uploads"
                        name="image_uploads"
                        accept=".jpg, .png, .svg, .jpeg"
                
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="text-lg font-semibold">Full Name <sup className=' text-red-500 mt-2'>*</sup></label>
                        <input 
                            required
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Enter your name"
                            className="py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                            value={data.fullName}
                            onChange={handleInputChange}
                        
                        />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer">
                        Update profile
                    </button>
                    <Link to="/user/profile">
                        <p className="link bg-violet-500 py-3 px-2 cursor-pointer flex items-center justify-center w-full gap-2 text-white rounded-sm hover:bg-violet-600">
                            <AiOutlineArrowLeft /> Go back to profile
                        </p>
                    </Link>
                </form>
            </div>
        </HomeLayout>
    );
}

export default EditProfile;