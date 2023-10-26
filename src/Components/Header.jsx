import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { BtnHeader } from '../UI/BtnHeader';

export const Header = () => {
  const [buttonData, setButtonData] = useState([
    { text: 'Про нас', color: '#2E2E2E', idHeader: 'about' },
    { text: 'Напрямки роботи', color: '#2E2E2E' },
    { text: 'Новини та події', color: '#2E2E2E' },
    { text: 'Підтримати нас', color: '#2E2E2E' },
    { text: 'Наші партнери', color: '#2E2E2E' },
  ]);

  const handleClick = (index) => {
    const newColor = buttonData[index].color === '#0C5AB5' ? '#2E2E2E' : '#0C5AB5';
    const updatedData = [...buttonData];
    updatedData[index].color = newColor;
    setButtonData(updatedData);
  }
  return (
    <Container >
      <div className='flex items-center justify-between text-xs lg:text-sm'>

        <Link to="/" className='w-[90px] lg:w-[120px] hover:cursor-pointer flex items-center'>
          <img src='./img/logo_ukr.svg' />
        </Link>

        <div className='flex font-semibold gap-5'>
          {buttonData.map((button, index) => (
            <BtnHeader
              key={index}
              text={button.text}
              onClick={() => handleClick(index)}
              btnActive={button.color}
              idHeader={button.idHeader}
            />
          ))}
        </div>

        <div className='flex p-[10px] cursor-pointer'>
          <img className='pr-2.5' src='./img/logo_language.svg' />
          <p className='pr-2.5'>UKR</p>
          <img src='./img/Vector_language.svg' />
        </div>
      </div>
    </Container>
  )
}
