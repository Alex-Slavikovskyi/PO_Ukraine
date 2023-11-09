import React, { useState } from 'react';
import { BtnHeader } from '../UI/BtnHeader';

export const BurgerMenu = ({ dataHederTabs, handleButtonClick, isActive, activeButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" md:hidden">
      <button onClick={toggleMenu}>
        <svg
          className="w-6 h-6 fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
          />
        </svg>
      </button>
      
      {isOpen && (
        <ul className="absolute top-[62px] w-screen left-[-26px] h-[276px] bg-white">
          {dataHederTabs.map((button, index) => (
            <BtnHeader
              key={index}
              text={button.text}
              onClick={() => handleButtonClick(index)}
              isActive={index === activeButton} 
              idHeader={button.idHeader}
            />

          ))}
        </ul>

      )}
    </div>
  );
};
