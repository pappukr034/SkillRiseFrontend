import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';

const RefundPolicy = () => {
  return (
   <HomeLayout>
      <div className="p-6 bg-gradient-to-tr from-slate-950 to-slate-700">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">Refund & Cancellation Policy</h1>
        <p className="mb-4">
          Thank you for purchasing our courses at our Learning Management System (LMS). We strive to ensure that our customers are satisfied with their purchases. However, if you are not entirely satisfied, we're here to help.
        </p>
        
        <p className="mb-4 text-gray-300 text-[17px]">
        There is a Strict no refund & no cancellation policy. You are entitled to a refund only in the case where you have not been allotted the course after payment.
        </p>
        
      </div>
    </div>
   </HomeLayout>
  );
};

export default RefundPolicy;
