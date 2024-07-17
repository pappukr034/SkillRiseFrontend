import { BiPhone, BiSolidLocationPlus, BiSolidMapPin } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { NavLink, Link,useNavigate } from 'react-router-dom';
import pappuNavLogo from '../Assets/pappuNavLogo.jpg'
import { BsArrowUp } from "react-icons/bs";
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const navigate=useNavigate()

    const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

    return (
        <>
            <footer className=" bg-slate-900 text-white py-10 w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap flex-col md:flex-row gap-8">
                {/* About Us */}
                <div className=' md:w-1/4 flex justify-center gap-2 flex-col flex-wrap '>
                    <div className='  flex items-center gap-16'>
                        <img 
                         onClick={()=> navigate('/')}
                        className='rounded-full w-[50px] py-1 cursor-pointer'
                        src={pappuNavLogo} alt="logo" />

                  <div>
                        {/* <!-- Social Media Icons --> */}
                        <div className=" flex-wrap flex justify-center items-center text-xl md:text-2xl gap-1">
                            <NavLink to='https://github.com/pappukr034/' className="text-white rounded-full p-1 duration-500 hover:bg-black">
                            <BsFacebook />
                            </NavLink>

                            <NavLink to='https://www.instagram.com/_pappu_1108?igsh=MTJtMmpzdW51OTg5Ng==' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-pink-500">
                            <BsInstagram />
                            </NavLink>

                            <NavLink to='https://www.linkedin.com/in/pappu034/' className="text-white mr-4  rounded-full p-1 duration-500 hover:bg-blue-500 cursor-pointer">
                            <BsLinkedin />
                            </NavLink>
                            
                            <NavLink to='https://www.youtube.com/' className="text-white mr-4 rounded-full p-1 duration-500 hover:bg-black cursor-pointer">
                            <BsTwitterX />
                            </NavLink>
                        </div>
                    </div>

                    </div>
                    <a 
                    className=' text-gray-200 text-base mt-1'
                    href="mailto:pappukr034@gmail.com">Email us : pappukr034@gmail.com</a>
                    <p className=" text-white">
                    <span className=' text-orange-500 font-medium text-2xl leading-2 space-x-1'>SkillRise</span> is dedicated to providing the best online education experience. Our courses are designed by industry experts to ensure you gain the skills needed to excel in your career.
                    </p>
                </div>

                {/* Quick Links */}
                <div className=' flex flex-col lg:ml-10 lg:mt-20 text-[18px] '>
                    <h3 className="text-xl font-bold mb-4  w-[111px]">Quick Links</h3>
                    <ul className="text-gray-400 space-y-2">
                    <li className=' hover:text-orange-400 duration-300'><Link to='/courses'>Courses</Link></li>
                    <li  className=' hover:text-orange-400 duration-300'><Link to='/about'>Aboute</Link></li>
                    <li  className=' hover:text-orange-400 duration-300'><Link to='/contact'>Contact</Link></li>
                    <li  className=' hover:text-orange-400 duration-300'><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>

                {/* Legal links */}
                <div className=' flex flex-col lg:ml-10 lg:mt-20 text-[18px] '>
                    <h3 className="text-xl font-bold mb-4  w-[111px]">Legal links</h3>
                    <ul className="text-gray-400 space-y-2">
                    <li  className=' hover:text-orange-400 duration-300'><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    <li className=' hover:text-orange-400 duration-300'><Link to='/TermsAndConditions'>Terms & condition</Link></li>
                    <li  className=' hover:text-orange-400 duration-300'><Link to='/RefundPolicy'>Refund & Cancellation Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='flex flex-col lg:ml-10 lg:mt-20 text-[18px] mb-2 gap-2'>
                    <h3 className="text-xl font-bold mb-4  w-[111px]">Contact Us</h3>
                    <ul className="text-gray-400 space-y-2">
                    

                    
                    <div className=' flex justify-start items-start gap-2'>
                       <MdEmail />
                        <a 
                    className=' text-gray-200 hover:text-orange-400 duration-300 text-base mt-1'
                    href="mailto:pappukr034@gmail.com">Email us : pappukr034@gmail.com</a>
                    </div>
                    <div className=' flex justify-start items-start gap-2'>
                        <BiPhone />
                        <li>Phone: 7667384500</li>
                    </div>
                    <div className=' flex justify-start items-start gap-2'>
                        <BiSolidLocationPlus />
                        <li>Address: Vaishali, BIHAR</li>
                    </div>
                    </ul>
                </div>
                </div>

                <div className="mt-8 border-orange-400 pt-4 text-center text-gray-400">
                Copyright &copy; {year} SkillRise. All rights reserved.
                </div>

                {/* go to top button */}
                <div className=" fixed z-50 bottom-16 right-4 rounded-full">
                {isVisible && (
                    <button
                    onClick={scrollToTop}
                    className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                    <BsArrowUp className=' w-8 h-8' />
                    </button>
                )}
               </div>
            </div>
            </footer>
        </>
    );

}

export default Footer;