import React from 'react'
import { Link } from 'react-router-dom';

export const BtnHeader = ({ text, onClick, isActive, idHeader }) => {

  return (
    <a href={idHeader}>
    <button
        className={`py-1 lg:p-2.5 ${isActive ? ' text-[#0C5AB5]' : ''}`}
        onClick={onClick}>
        {text}
      </button>
    </a>
  )
}