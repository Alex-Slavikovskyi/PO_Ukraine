import React, { useEffect, useState } from 'react'
import { Container } from './Container'
// import { dataCardNews } from '../data/dataCardNews';
import { dataCardNewsEn } from '../locales/en/dataCardNewsEn';
import { dataCardNewsUk } from '../locales/uk/dataCardNewsUk'
import { CardNews } from './CardNews';
import { ShowMore } from '../UI/ShowMore';
import { CardSlider } from './CardSlider';
import { useTranslation } from 'react-i18next';


export const NewsSection = () => {
  const { t, i18n } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const dataCardNews = i18n.language === 'en' ? dataCardNewsEn : dataCardNewsUk;

  console.log(t());
  console.log(i18n.language);

  const visibleCards = showAll ? dataCardNews : dataCardNews.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Container id='news' className="pt-[80px] lg:pt-[140px] overflow-hidden ">
      <h2 className='font-bold text-lg md:text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather leading-6 md:leading-[30px] lg:leading-[32px]'>
        Новини на події
      </h2>

      <div className='md:flex md:justify-between md:items-end'>
        <p className='pt-3 text-xs md:text-sm leading-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>

        <ShowMore
          className="pt-[16px] hidden md:flex"
          text="Дивитись усі"
          onClick={toggleShowAll}
          showAll={showAll}
        />
      </div>

      <div className='md:hidden pt-[27px]'>
        <CardSlider cards={dataCardNews} />
      </div>


      <div className='hidden md:flex md:justify-center flex-wrap gap-x-5 gap-y-8 pt-[27px] md:pt-[60px]'>
        {
          visibleCards && visibleCards.map(card => (
            <CardNews card={card} key={card.newsId} />
          ))
        }
      </div>
    </Container>
  )
}
