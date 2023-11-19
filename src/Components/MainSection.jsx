import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { Container } from './Container'

export const MainSection = () => {
  const [btnActive, setBtnActive] = useState('#F7BF2F')

  const hendleClick = () => {
    const newColor = btnActive === '#F7BF2F' ? '#0C5AB5' : '#F7BF2F';
    setBtnActive(newColor);
  }
  return (
    <div className='md:pb-[140px] pt-[56px] md:pt-[90px] lg:pt-[120px]'>
      <div className="bg-[url('./img/baner_mainSection.png')] bg-cover bg-center h-[512px] md:h-[466px] lg:h-[740px] w-screen ">
        <Container className="">
          <div className='md:ml-[80px] lg:ml-[72xpx] pt-[42px] lg:pt-[140px]'>
            <h4 className='font-semibold text-white text-xs md:text-base lg:text-lg leading-4 md:leading-[22px] lg:leading-[25px]'>
              Громадська організація “Стала Україна”
            </h4>
            <h1 className='font-bold text-2xl md:text-[32px] lg:text-[50px] leading-[34px] md:leading-[44px] lg:leading-[70px] md:w-[351px] lg:w-[606px] text-white mt-4'>
              Працюємо разом над зростанням, розвитком та відновленням
            </h1>
            <Button
              className="mt-[214px] md:mt-8 lg:mt-10"
              text="Допомогти нам"
              type="mainBtn"
              onClick={hendleClick}
              btnActive={btnActive} />

          </div>
        </Container>
      </div>
    </div>

  )
}
