import { BiPhone, BiSolidLocationPlus, BiSolidMapPin } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { NavLink, Link,useNavigate } from 'react-router-dom';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const navigate=useNavigate()

    return (
        <>
            <footer className=" bg-slate-900 text-white py-10 w-full">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About Us */}
                <div className=' flex justify-center gap-2 flex-col flex-wrap '>
                    <div className='  flex items-center gap-28'>
                        <img 
                         onClick={()=> navigate('/')}
                        className='rounded-full w-[50px] py-1 cursor-pointer'
                        src="https://res.cloudinary.com/mybackendpappu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1718547891/lms/dsbordizb4upefqspq1w.jpg" alt="logo" />

                  <div>
                        {/* <!-- Social Media Icons --> */}
                        <div className=" flex-wrap px-1 flex justify-center items-center text-xl md:text-2xl gap-2">
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

                {/* Contact Us */}
                <div className='flex flex-col lg:ml-10 lg:mt-20 text-[18px] mb-2 gap-2'>
                    <h3 className="text-xl font-bold mb-4  w-[111px]">Contact Us</h3>
                    <ul className="text-gray-400 space-y-2">
                    

                    
                    <div className=' flex justify-start items-start gap-2'>
                       <MdEmail />
                        <a 
                    className=' text-gray-200 text-base mt-1'
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

                <div className="mt-8 border-t border-orange-400 pt-4 text-center text-gray-400">
                &copy; {year} SkillRise. All rights reserved.
                </div>
            </div>
            </footer>
        </>
    );

}

export default Footer;