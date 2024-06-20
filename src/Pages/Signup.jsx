import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { isEmail, isValidPassword } from '../Helpers/regexMatcher';
import HomeLayout from '../Layouts/HomeLayout';
import { createAccount } from '../Redux/Slices/AuthSlice';
import { LuCrown } from 'react-icons/lu';

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupData, setSignupData] = useState({
        fullName: "",
        email: "",
        password: "",
        avatar: "",
        previewImage:""
        
    });

    function handleUserInput(e) {
        const {name, value} = e.target;
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    function getImage(event) {
        event.preventDefault();
        // getting the image
        const uploadedImage = event.target.files[0];

        if(uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setSignupData({
                    ...signupData,
                    avatar: uploadedImage,
                    previewImage:this.result
                });
            })
        }
    }

    async function createNewAccount(event) {
        event.preventDefault();
        if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar) {
            toast.error("Please fill all the details");
            return;
        }

        // checking name field length
        if(signupData.fullName.length < 5) {
            toast.error("Name should be atleast of 5 characters")
            return;
        }
        // checking valid email
        if(!isEmail(signupData.email)) {
            toast.error("Invalid email id");
            return;
        }
        // checking password validation
        if(!isValidPassword(signupData.password)) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData=new FormData()
        formData.append("fullname",signupData.fullName)
        formData.append("email",signupData.email)
        formData.append("avatar",signupData.avatar)
        formData.append("password",signupData.password)

       console.log("form data ",formData)
        
        // dispatch create account action
        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success){
            navigate("/");
        }

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: "",
            previewImage:""
        });


    }

    return (
        <HomeLayout>
        <div className='flex flex-col items-center justify-center bg-red-100  bg-gradient-to-tl from-slate-950 to-slate-700 px-2 py-6'>

                <div>
                    <LuCrown className=' text-2xl text-lime-400' />
                    <h1 className=' text-xl font-bold mt-1'>Welcome back !</h1>
                </div>
                
            <div className='rounded-md mt-8 w-full flex flex-col md:flex-row'>                  
                <div className=' md:w-1/2'>
                    <img
                     className=' w-full h-screen rounded-tl-md rounded-tr-md'
                     src="https://images.pexels.com/photos/5647660/pexels-photo-5647660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                    <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 p-4 text-white  shadow-[0_0_10px_black] w-full rounded-bl-md rounded-br-md md:w-1/2'>
                         
                    <div>
                       <LuCrown className=' text-2xl text-lime-400' />
                       <h1 className=' text-xl font-bold mt-1'>Welcome back !</h1>
                    </div>
    
                        <label htmlFor="image_uploads" className="cursor-pointer">
                            {signupData.previewImage ? (
                                <img className="w-24 h-24 rounded-full m-auto" src={signupData.previewImage} />
                            ) : (
                                <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
                            )}
                        </label>
                        <input 
                            onChange={getImage}
                            className="hidden py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                            type="file"
                            name="image_uploads"
                            id="image_uploads"
                            accept=".jpg, .jpeg, .png, .svg"
                        />
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="fullName" className='font-semibold'> Name <sup className=' text-red-500 mt-2'>*</sup> </label>
                            <input 
                                type="text" 
                                required
                                name="fullName"
                                id="fullName"
                                placeholder="Enter your name.."
                                className="py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                                onChange={handleUserInput}
                                value={signupData.fullName}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-semibold'> Email <sup className=' text-red-500 mt-2'>*</sup> </label>
                            <input 
                                type="email" 
                                required
                                name="email"
                                id="email"
                                placeholder="Enter your email.."
                                className="py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                                onChange={handleUserInput}
                                value={signupData.email}
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
                                className="py-3 px-2 text-[18px] border-none outline-none focus:ring-1 focus:duration-300"
                                onChange={handleUserInput}
                                value={signupData.password}
                            />
                        </div>
    
                        <button type="submit" className='mt-2 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg text-black cursor-pointer bg-gradient-to-tr from-yellow-400 to-lime-400 hover:bg-gradient-to-tr hover:from-lime-400 hover:to-yellow-400'>
                            Create account
                        </button>
    
                        <p className="text-center">
                            Already have an account ? <Link to="/login" className='link text-yellow-400 cursor-pointer'> Login</Link>
                        </p>
    
                    </form>
            </div>
        </div>
        </HomeLayout>
    );
}

export default Signup;