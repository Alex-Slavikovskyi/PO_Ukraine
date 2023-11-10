import React from 'react'

export const ShowMore = ({ text, onClick, showAll, className }) => {
  return (
    <div className={`flex items-end cursor-pointer ${className}`}
      onClick={onClick}
    >
      <p className='text-xs lg:text-sm leading-3 lg:leading-4 pr-2 font-bold text-[#0C5AB5]'>{text}</p>
      <div className='h-3 w-3 md:h-4 md:w-4 '>
      {
        !showAll ? (
          <img  src='./img/arrow-diagonal-down.svg' />
        ) : (
          <img  src='./img/arrow-diagonal-up.svg' />
        )
      }
      </div>
    </div>
  )
}
