import React from 'react'
import { Container } from './Container'
import { CardWork } from './CardWork'

export const Work = () => {
  return (
    <Container>
      <div className='w-[534px]'>
        <h2 className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Напрямки роботи</h2>
        <p className='pt-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      </div>
      <div className='pt-[60px]'>
        <CardWork />
      </div>
    </Container>
  )
}
