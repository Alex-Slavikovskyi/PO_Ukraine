import React from 'react'
import { Link } from 'react-router-dom';

export const BtnHeader = ({ text, onClick, isActive, idHeader }) => {

  return (
    <a href={idHeader}>
      <button
        className={`py-[18px] md:py-1 px-[26px] md:px-0 block w-full hover:bg-gray-200 md:hover:bg-transparent text-left md:text-center lg:p-2.5 ${isActive ? ' text-[#0C5AB5]' : ''} `}
        onClick={onClick}>
        {text}
      </button>
    </a>
  )
}