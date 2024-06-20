import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'
import {faqs} from '../Constants/Faq'
import Faq from '../Components/Faq'

function FaqPage() {
  return (
     <HomeLayout>
          <div className="max-w-4xl bg-gradient-to-tr from-slate-950 to-slate-700 mx-auto p-4 sm:p-6 lg:p-8 px-6 py-8 ">
            <h2 className="text-3xl mt-8 font-extrabold text-gray-200 ">Frequently Asked Questions</h2>
            <div className="space-y-4 mt-5 py-3">
                {faqs.map((faq, index) => (
                    <Faq key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
     </HomeLayout>
  )
}

export default FaqPage
