// FAQItem.js
import React, { useState } from 'react';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { BsFileMinus, BsPlus } from 'react-icons/bs';

const FAQItem = ({key, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b w-full  border-gray-200 py-4 bg-gray-800 px-2 rounded-lg ">
            <button
                className="w-full text-left flex justify-between items-center text-gray-800 px-3"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-xl text-gray-300">{question}</span>
                <span className='text-xl text-yellow-500'>{isOpen ? <BiSolidMinusCircle /> : <BsPlus />}</span>
            </button>
            {isOpen && <p className="mt-2 text-[19px] px-3 text-gray-400">{answer}</p>}
        </div>
    );
};

export default FAQItem;
