import React from 'react'
import { Container } from './Container'

export const CardSupport = ({ card }) => {
  return (
    <div className="pt-8 lg:pt-[40px] ">
      <button className='text-white bg-[#0C5AB5] rounded-r rounded-bl w-full rounded-tl-[32px] h-[51px] flex justify-between items-center'>
        <h3 className='pl-6 font-bold text-sm lg:text-xl text-left'>{card.header}</h3>
        <div className='pr-7'>
          <img src='./img/Vector-up.svg' className=' w-[11px] h-[11px] lg:w-[17px] lg:h-[17px]' />
        </div>
      </button>

      <div className='border-l-4 rounded-l border-[#0C5AB5] text-[#0C5AB5] mt-3 pl-4 text-xs lg:text-sm leading-[22px] lg:leading-7'>
        <div>
          <p className='inline pr-2 font-bold'>{card.nameField}</p>
          <p className='inline'>{card.nameData}</p>
        </div>

        <div>
          <p className='inline pr-2 font-bold'>{card.codeField}</p>
          <p className='inline'>{card.codeData}</p>
        </div>

        <div>
          <p className='inline pr-2 font-bold'>{card.bankField}</p>
          <p className='inline'>{card.bankData}</p>
        </div>

        <div>
          <p className='inline pr-2 font-bold'>{card.accountField}</p>
          <p className='inline'>{card.accountData}</p>
        </div>

        <div>
          <p className='inline pr-2 font-bold'>{card.detailsField}</p>
          <p className='inline'>{card.detailsData}</p>
        </div>
      </div>
    </div>
  )
}
