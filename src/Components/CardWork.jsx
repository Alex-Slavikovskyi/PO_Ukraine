import React, { useState } from 'react'
import { Button } from '../UI/Button'

export const CardWork = ({ card }) => {
  const [btnActive, setBtnActive] = useState('#F7BF2F')

  const hendleClick = () => {
    const newColor = btnActive === '#F7BF2F' ? '#0C5AB5' : '#F7BF2F';
    setBtnActive(newColor);
  }

  return (
    <div className='w-[220px] h-[386px] lg:w-[360px] lg:h-[435px] border-l-4 border-[#0C5AB5] rounded-tl-[32px]'>
      <div className='py-6 px-4 lg:py-8 lg:px-6 '>
        <div className='h-[266px] text-ellipsis overflow-hidden '>
          <div className='w-[28px] h-[28px] lg:w-[36px] lg:h-[36px]'>
            <img src={card.logoCard} />
          </div>
          <div className='sm:max-lg:h-[44px] mt-[20px] lg:mt-8'>
            <h3 className='font-bold text-base  lg:text-xl '>{card.title}</h3>
          </div>

          <p className='text-xs leading-[22px] lg:leading-7 lg:text-sm pt-[20px] lg:pt-8'>{card.text}</p>

        </div>
        <Button
          text="Допомогти нам"
          type="cardWork"
          onClick={hendleClick}
          btnActive={btnActive} />
      </div>
    </div>
  )
}
