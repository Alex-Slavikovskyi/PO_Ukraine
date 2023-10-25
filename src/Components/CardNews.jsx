import React from 'react'
import { ShowMore } from '../UI/ShowMore'

export const CardNews = ({ card }) => {
  return (
    <div className='w-[220px] lg:w-[360px] h-[383px] lg:h-[466px]'>
      <div className='h-[132px] lg:h-[200px]'>
        <img src={card.img} className='rounded-t-lg lg:rounded-t-xl' />
      </div>

      <div className='py-4 pl-[10px] pr-[14px] lg:pl-[12px] lg:pr-[16px] border-l-4 border-[#F7BF2F] mt-3 lg:mt-4 rounded-l box-border'>
        <h3 className='font-bold text-base  lg:text-xl'>{card.title}</h3>

        <p className='text-xs leading-[22px] lg:leading-7 lg:text-sm pt-4 lg:pt-6'>{card.text}</p>

        <div className='flex justify-between pt-4 lg:pt-6'>
          <p className='lg:text-sm text-xs'>{card.data}</p>
          <ShowMore text="Читати більше" />
        </div>
      </div>
    </div>
  )
}
