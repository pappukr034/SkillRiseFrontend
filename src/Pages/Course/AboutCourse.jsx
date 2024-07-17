import React from 'react';
import { Bs0Circle } from 'react-icons/bs';

const AboutCourse = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-800 rounded-lg py-4 px-2">
      {/* Left Side */}
      <div className="md:w-1/2 p-4">
        <span className=" text-white text-4xl md:text-5xl border-b-2 font-bold mb-4 border-green-400">About the Course</span>
        <p className="mb-4 mt-5 text-gray-400 text-[19px]">
        Embark on an extraordinary coding odyssey with our groundbreaking course, "DSA to Development - Complete Coding Guide"! 🌟 Discover the transformative power of mastering Data Structures and Algorithms (DSA) as you venture towards becoming a Proficient Developer or Data Scientist. 💻
        </p>
        <ul className="list-disc pl-5 text-gray-300 text-[18px] leading-relaxed tracking-tighter">
          <li>Comprehensive DSA Mastery: Learn essential data structures, algorithms, and advanced techniques for optimized coding.</li>
          <li>Programming Proficiency: Develop a strong foundation in programming languages to tackle coding challenges with confidence.</li>
          <li>Real-World Application: Engage in hands-on projects and build remarkable applications to apply your skills.</li>
          <li>Managing state with Redux</li>
          <li>Backend development with Node.js and Express</li>
          <li>Database management with MongoDB</li>
          <li>Deploying applications to the cloud</li>
        </ul>
      </div>
      
      {/* Right Side */}
      <div className="md:w-1/2 mt-2 flex justify-center items-center">
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/1/Web/Other/aboutCourse_1686633267.png" alt="Course illustration" className=" w-[90%] md:w-1/2 h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default AboutCourse;
