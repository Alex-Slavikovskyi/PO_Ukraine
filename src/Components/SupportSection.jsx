import React from 'react'
import { Container } from './Container'
import { CardSupport } from './CardSupport'

export const SupportSection = () => {
  return (
    <Container className="pt-[80px] lg:pt-[140px]">
      <h2 className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Підтримати нас</h2>
      <p className='pt-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>

    <CardSupport/>
    </Container>
  )
}
