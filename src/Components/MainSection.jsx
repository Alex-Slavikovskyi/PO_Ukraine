import React, { useState } from 'react'
import { Button } from '../UI/Button'

export const MainSection = () => {
  const [btnActive, setBtnActive] = useState('#F7BF2F')

  const hendleClick = () => {
    const newColor = btnActive === '#F7BF2F' ? '#0C5AB5' : '#F7BF2F';
    setBtnActive(newColor);
  }
  return (
    <div className='pb-[140px]'>
      <div className="bg-[url('./img/baner_mainSection.png')] bg-cover bg-center h-[466px] lg:h-[740px] w-full ">
        <div className='ml-[104px] lg:ml-[118px] pt-[42px] lg:pt-[140px]'>
          <h4 className='font-semibold text-white text-base lg:text-lg lg:leading-[25px]'>Громадська організація “Стала Україна”</h4>
          <h1 className='font-bold text-[32px] lg:text-[50px] leading-[44px] lg:leading-[70px] w-[351px] lg:w-[606px] text-white mt-4'>Працюємо разом над зростанням, розвитком та відновленням</h1>
          <Button
            text="Допомогти нам"
            type="mainBtn"
            onClick={hendleClick}
            btnActive={btnActive} />

        </div>
      </div>
    </div>

  )
}
