import React from 'react';
import { Container } from './Container';
import { CardWork } from './CardWork';
import { dataCardWork } from '../data/dataCardWork';

export const WorkSection = () => {
  return (
    <Container id="work" className="pt-[56px] md:pt-[80px] lg:pt-[140px]">
      <div className='md:w-[534px]'>
        <h2 className='font-bold text-lg md:text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather leading-6 md:leading-[30px] lg:leading-[32px]'>Напрямки роботи</h2>
        <p className='pt-3 text-xs leading-5 lg:text-sm lg:leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      </div>
      <div className='flex justify-center flex-wrap md:gap-x-5 gap-y-8 pt-[60px]'>
        {
          dataCardWork && dataCardWork.map(card => (
            <CardWork card={card} key={card.id}/>
          ))
        }
      </div>
    </Container>
  )
}
