import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Container'
import { BtnHeader } from '../UI/BtnHeader';
import { dataHederTabs } from '../data/dataHederTabs';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {

  //language
  const [isDropdownLanguage, setIsDropdownLanguage] = useState(false);
  const userLanguage = navigator.language || navigator.userLanguage;
  const primaryLanguage = userLanguage.split('-')[0];

  const [language, setLanguage] = useState(primaryLanguage === "uk" ? "UKR" : "ENG");

  const toggleDropdownLanguage = () => {
    setIsDropdownLanguage(!isDropdownLanguage);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setIsDropdownLanguage(false);
  };
  // ---------------------



  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    if (index === activeButton) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
  };

  return (
    <Container className="md:pl-6 md:pr-[34px]">
      <div className='relative flex items-center justify-between text-xs lg:text-sm'>

        <BurgerMenu
          dataHederTabs={dataHederTabs}
          handleButtonClick={handleButtonClick}
          isActive={activeButton}
          activeButton={activeButton}
        />

        <Link to="/" className='w-[62px] md:w-[90px] lg:w-[120px] hover:cursor-pointer flex items-center'>
          <img src='../img/logo_ukr.svg' />
        </Link>

        <div className='hidden md:flex font-semibold gap-5 '>
          {dataHederTabs.map((button, index) => (
            <BtnHeader
              key={index}
              text={button.text}
              onClick={() => handleButtonClick(index)}
              isActive={index === activeButton} // Передаем состояние активности кнопки
              idHeader={button.idHeader}
            />
          ))}
        </div>

        <div className='relative inline-block'>
          <button className='flex items-center cursor-pointer' onClick={toggleDropdownLanguage}>
            <img className='pr-2' src='../img/logo_language.svg' alt='Language Icon' />
            <p className='pr-2.5'>{language}</p>
            {!isDropdownLanguage ? (
              <img className=' w-[12px] lg:w-[16px]' src='../img/Vector-down.svg' alt='Dropdown Icon' />
            ) : (
              <img className='w-[12px] lg:w-[16px] ' src='../img/Vector-up.svg' alt='Dropdown Icon' />
            )}
          </button>

          {isDropdownLanguage && (
            <div className='absolute top-10 right-0 bg-white rounded-md shadow-md'>
              <ul className='font-semibold'>
                <li
                  className={`p-[10px] cursor-pointer ${language === 'UKR' ? 'bg-[#0C5AB5] text-[#FFF]' : ''}`}
                  onClick={() => changeLanguage('UKR')}
                >UKR</li>
                <li
                  className={`p-[10px] cursor-pointer ${language === 'ENG' ? 'bg-[#0C5AB5] text-[#FFF]' : ''}`}
                  onClick={() => changeLanguage('ENG')}
                >ENG</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
