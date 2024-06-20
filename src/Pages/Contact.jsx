import { useState } from "react";
import { toast } from "react-hot-toast";

import axiosInstance from "../Helpers/axiosInstance";
import { isEmail } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { useNavigate } from "react-router-dom";


function Contact() {
    const navigate= useNavigate()
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    } 

    async function onFormSubmit(e) {
        e.preventDefault();
        if(!userInput.email || !userInput.name || !userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }

        if(!isEmail(userInput.email)) {
            toast.error("Invalid email");
            return;
        }

        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "Submitting your message...",
                success: "Form submitted successfully",
                error: "Failed to submit the form"
            });
            const contactResponse = await response;
            console.log(contactResponse)
            if(contactResponse?.data?.success) {
                setUserInput({
                    name: "",
                    email: "",
                    message: "",
                });
              navigate('/')
            }
        } catch (err) {
            toast.error("operation failed....")
        }

    }

    return (
        <HomeLayout>
               <h1 className="text-center text-6xl font-semibold bg-gradient-to-r from-lime-300 to-orange-500 bg-clip-text text-transparent mt-8">
                 Contact Form
                </h1>
        <div className="flex mt-10 mb-5 w-full flex-col md:flex-row bg-slate-950">
            <div className="p-5 md:w-1/2 bg-slate-950 ">            
                <img src="https://plus.unsplash.com/premium_photo-1687533704681-dda0f700c108?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Us" className="w-full rounded-lg shadow-md h-auto " />
            </div>
            <div className="p-5 md:w-1/2  bg-slate-950 rounded-lg shadow-lg flex justify-center items-center mt-4">
                <form 
                    noValidate
                    onSubmit={onFormSubmit}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem] border-2 border-lime-400">

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="text-xl font-semibold">
                            Name
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-md h-[40px]"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="text-xl font-semibold">
                            Email
                        </label>
                        <input 
                            className="bg-transparent border px-2 py-1 rounded-md h-[40px] "
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.email}
                        />

                    </div>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="text-xl font-semibold">
                            Message
                        </label>
                        <textarea 
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your email"
                            onChange={handleInputChange}
                            value={userInput.message}
                        />

                    </div>
                    <button type="submit"
                        className="w-full hover:bg-yellow-500 transition-all ease-in-out duration-300  py-2 font-semibold text-lg cursor-pointer bg-gradient-to-r from-lime-300 to-orange-500 rounded-md mt-2 text-black"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
            
        </HomeLayout>
    );
}

export default Contact;