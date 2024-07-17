import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import {faqs} from '../Constants/Faq'
import Faq from '../Components/Faq'

function FaqPage() {
  return (
     <HomeLayout>
          <div className="bg-gradient-to-tr from-slate-950 to-slate-700  px-6 py-8 flex w-full space-x-4 ">
            <div className=' w-full md:w-1/2 '>
            <h2 className="text-3xl mt-8 font-extrabold text-gray-300 ">Frequently Asked <br /> Questions</h2>
            <div className="space-y-4 mt-5 py-3">
                {faqs.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            </div>
            <div className=' hidden md:block md:w-1/2 mt-10 p-1 '>
             <div className=' flex gap-2'>
             <img className=' rounded-2xl w-1/2' src="https://images.pexels.com/photos/6238038/pexels-photo-6238038.jpeg?auto=compress&cs=tinysrgb&w=600" alt="FAQ" />
             <img className=' rounded-2xl w-1/2' src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="FAQ" />
             </div>
              <img className=' rounded-2xl w-full h-[450px] mt-4 ' src="https://images.pexels.com/photos/4343451/pexels-photo-4343451.jpeg?auto=compress&cs=tinysrgb&w=600" alt="FAQ" />
            </div>
        </div>
     </HomeLayout>
  )
}

export default FaqPage
