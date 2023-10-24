import React, { useState } from 'react'
import { Button } from '../UI/Button'
import { Container } from './Container'
import { TextAboutSection } from './TextAboutSection'

export const AboutSection = () => {
  const [btnActive, setBtnActive] = useState('#F7BF2F')

  const hendleClick = () => {
    const newColor = btnActive === '#F7BF2F' ? '#0C5AB5' : '#F7BF2F';
    setBtnActive(newColor);
  }
  
  return (
    <Container className='flex pt-[93px] justify-between items-center'>
      <div className='h-[340px] w-[340px] lg:h-[480px] lg:w-[480px]'>
        <img src='./img/img_aboutSection.png' />
      </div>

      <div className='w-[340px] lg:w-[576px] '>
        <h2 id='about' className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Про нас</h2>

        <div className="pt-[20px] lg:pt-[60px] ">
          <TextAboutSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </TextAboutSection>
          <TextAboutSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </TextAboutSection>
          <TextAboutSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </TextAboutSection>
        </div>


        <Button text="Приєднатись до нас" type="mainBtn" onClick={hendleClick} btnActive={btnActive} />
      </div>
      {/* <div className="bg-[url('./img/maps.png')]" > */}
        {/* <img src='./img/maps.png'/> */}
      {/* </div> */}
    </Container>
  )
}
