import React from 'react';
import HomeLayout from '../Layouts/HomeLayout';

const PrivacyPolicy = () => {
  return (
    <HomeLayout>
        <div className="p-6 bg-gradient-to-tr from-slate-950 to-slate-700">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-white">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to our Learning Management System (LMS). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white"> Information We Collect</h2>
        <p className="mb-4">
          We collect various types of information to provide and improve our services to you. This includes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Identification Information (Name, Email Address, Phone Number)</li>
          <li>Usage Data (IP Address, Browser Type, Pages Visited)</li>
          <li>Cookies and Tracking Technologies</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">How We Use Your Information</h2>
        <p className="mb-4">
          The information we collect is used for various purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
          <li>To monitor the usage of our service</li>
        </ul>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Information Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Data Security</h2>
        <p className="mb-4">
          We strive to use commercially acceptable means to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-white">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@lms.com.
        </p>
      </div>
    </div>
    </HomeLayout>
  );
};

export default PrivacyPolicy;
