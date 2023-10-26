import React from 'react';
import { Container } from './Container';
import { CardWork } from './CardWork';
import { dataCardWork } from '../data/dataCardWork';

export const WorkSection = () => {
  return (
    <Container id="work" className="pt-[80px] lg:pt-[140px]">
      <div className='w-[534px]'>
        <h2 className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Напрямки роботи</h2>
        <p className='pt-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      </div>
      <div className='flex justify-center flex-wrap gap-x-5 gap-y-8 pt-[60px]'>
        {
          dataCardWork && dataCardWork.map(card => (
            <CardWork card={card} key={card.id}/>
          ))
        }
      </div>
    </Container>
  )
}
