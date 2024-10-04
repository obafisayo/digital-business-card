import React, { useState } from 'react';

const CardNav = ({ arr, handler = () => {} }) => {
    const [clicked, setClicked] = useState([true, false, false]); // Initialize with the first tab clicked

    const handleClick = (index) => {
        setClicked((prevStates) => 
            prevStates.map((state, idx) => idx === index ? true : false)
        );
        handler(index); // Pass the index to the handler
    };

    return (
        <div className="flex items-center justify-center">
            <ul className="inline-flex gap-10">
                {Array.isArray(arr) && arr.map((item, index) => (
                    <li key={index} className={`font-medium relative cursor-pointer`}
                        onClick={() => handleClick(index)}
                    >
                        <h1>{item}</h1>
                        <span
                            className={`absolute left-0 bottom-0 
                                ${clicked[index] ? 'w-full' : 'w-0'} 
                                h-[2.5px] transition-all duration-300 rounded-full
                            ${clicked[index] ? "bg-textPrimary" : "bg-transparent"}
                            `}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CardNav;
