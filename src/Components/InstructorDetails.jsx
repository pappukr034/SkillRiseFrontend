import React from 'react';

const InstructorDetails = ({ image, name, description, about }) => {
  return (
    <div className="flex w-full h-[490px] flex-col md:flex-row bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
      <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
        <img 
          src={image} 
          alt={name} 
          className=" w-60 h-60 md:w-[200px] md:h-[200px] rounded-full object-cover"
        />
      </div>
      <div className="md:w-1/2 flex flex-col md:mt-24">
        <h2 className="text-3xl md:text-4xl font-bold ">{name}</h2>
        <p className="mb-3 text-gray-800">{description}</p>
        <p className=' font-thin text-[16px] md:mt-8'>{about}</p>
      </div>
    </div>
  );
};

export default InstructorDetails;
