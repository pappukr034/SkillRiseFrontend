import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';

const TermsAndConditions = () => {
  return (
   <HomeLayout>
     <div className=" py-8 px-6 bg-gradient-to-tr from-slate-950 to-slate-800">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-2xl md:text-5xl font-bold mb-6 text-center text-white">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to our Learning Management System (LMS). By accessing or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing our LMS, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you are prohibited from using our services.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Use of the LMS</h2>
        <p className="mb-4">
          You agree to use the LMS only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the LMS.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Account Responsibilities</h2>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Intellectual Property</h2>
        <p className="mb-4">
          The content, layout, design, data, databases, and graphics on the LMS are protected by intellectual property laws and are owned by or licensed to us.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your access to the LMS immediately, without prior notice or liability, if you breach any of these Terms and Conditions.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.
        </p>
        
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at support@lms.com.
        </p>
      </div>
    </div>
   </HomeLayout>
  );
};

export default TermsAndConditions;
