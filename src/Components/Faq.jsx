// FAQItem.js
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-l border-gray-200 py-4 bg-gray-700 px-2 ">
            <button
                className="w-full text-left flex justify-between items-center text-gray-800 px-3"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-xl text-white">{question}</span>
                <span className=' text-xl text-yellow-500'>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p className="mt-2 text-[19px] px-3 text-gray-200">{answer}</p>}
        </div>
    );
};

export default FAQItem;
