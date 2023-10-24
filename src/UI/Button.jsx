import React, { useState } from 'react'

export const Button = ({ text, type, onClick, btnActive, }) => {
  let buttonType = '';
  if (type === 'mainBtn') {
    buttonType =
      `font-bold px-[46px] py-3.5 lg:px-14 lg:py-[17px]  rounded text-white mt-8 lg:mt-10 text-sm lg:text-base`;
  } else if (type === 'cardWork') {
    buttonType =`font-bold rounded text-white w-full py-[11px] mt-8`
      '';
  } 

  return (
    <button
      className={`${buttonType} `}
      style={{ backgroundColor: btnActive }}
      onClick={onClick}>
      {text}
    </button>
  )
}
