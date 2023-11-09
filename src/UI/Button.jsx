import React, { useState } from 'react'

export const Button = ({ className, text, type, onClick, btnActive, }) => {
  let buttonType = '';
  if (type === 'mainBtn') {
    buttonType =
      `w-full md:w-auto font-bold px-[46px] py-3 md:py-3.5 lg:px-14 lg:py-[17px] rounded text-white text-sm lg:text-base`;
  } else if (type === 'cardWork') {
    buttonType = `font-bold text-xs md:text-sm  lg:text-base rounded text-white w-full py-[11px] mt-8`
    '';
  }

  return (
    <button
      className={`${buttonType} ${className}`}
      style={{ backgroundColor: btnActive }}
      onClick={onClick}>
      {text}
    </button>
  )
}
