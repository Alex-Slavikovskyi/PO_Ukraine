import React from 'react'
import { Container } from './Container'
import { CardSupport } from './CardSupport';
import { dataCardSupport } from '../data/dataCardSupport';

export const SupportSection = () => {

  return (
    <Container id="support" className="pt-[56px] md:pt-[80px] lg:pt-[140px]">
      <h2 className='font-bold text-lg md:text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather leading-6 md:leading-[30px] lg:leading-[32px]'>Підтримати нас</h2>
      <p className='pt-3 text-xs lg:text-sm leading-5 lg:leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>

      <div className='pt-0 lg:pt-[20px]'>
        {
          dataCardSupport && dataCardSupport.map(card => (
            <CardSupport
              card={card}
              key={card.id}
            />
          ))
        }
      </div>
    </Container>
  )
}
