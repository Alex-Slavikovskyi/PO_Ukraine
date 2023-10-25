import React from 'react'
import { Link } from 'react-router-dom';

export const BtnHeader = ({ text, onClick, btnActive, idHeader }) => {

  return (
    <Link to={`#${idHeader}`}>
      <button
        className="py-1 lg:p-2.5"
        style={{ color: btnActive }}
        onClick={onClick}>
        {text}
      </button>
    </Link>
  )
}