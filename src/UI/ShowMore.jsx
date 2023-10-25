import React from 'react'

export const ShowMore = ({text}) => {
  return (
    <div className='flex items-end cursor-pointer'>
          <p className='text-xs lg:text-sm leading-3 lg:leading-4 pr-2 font-bold text-[#0C5AB5]'>{text}</p>
          <div className='h-4 w-4'>
            <img src='./img/arrow-diagonal-down.svg' />
          </div>
        </div>
  )
}
