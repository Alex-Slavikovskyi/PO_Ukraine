import React, { useState } from 'react'
import { Button } from '../UI/Button'

export const CardWork = () => {
  const [btnActive, setBtnActive] = useState('#F7BF2F')

  const hendleClick = () => {
    const newColor = btnActive === '#F7BF2F' ? '#0C5AB5' : '#F7BF2F';
    setBtnActive(newColor);
  }

  return (
    <div className='w-[360px] h-[435px] border-l-4 border-[#0C5AB5] rounded-tl-[32px]'>
      <div className='py-8 px-6 '>
        <div className='h-[296px] text-ellipsis overflow-hidden '>
          <img src='./img/science.svg' />
          <h3 className='font-bold text-xl pt-8'>Наука</h3>
          <p className='text-sm pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

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
