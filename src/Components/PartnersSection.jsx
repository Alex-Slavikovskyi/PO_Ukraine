import React from 'react'
import { Container } from './Container'

export const PartnersSection = () => {
  return (
    <Container id='partners' className="pb-[164px] pt-[80px] lg:pt-[140px]">
      <div className='w-[521px] lg:w-[533px]'>
        <h2 className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Наші партнери</h2>
        <p className='pt-3 text-xs lg:text-sm leading-5 lg:leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='flex justify-center pt-[72px] lg:pt-[84px]'>
        <div className='w-[471px] lg:w-[696px] flex flex-col justify-center items-center'>
          <div className='w-[86px] h-[86px] lg:w-[118px] lg:h-[118px]'>
            <img src='./img/logo-partners.svg' />
          </div>
          <h3 className='font-bold text-base  lg:text-xl pt-6'>ПП «Фінтех Черкаси»</h3>
          <p className='text-xs leading-[20px] lg:leading-7 lg:text-sm pt-5'>ПП “Фінтех Черкаси” є розробником інформаційно-програмного комплексу “Місцевий бюджет” (ІПК "Місцевий бюджет"), який використовують територіальні громади для управління місцевими бюджетами.</p>
        </div>
      </div>
    </Container>
  )
}
