import React, { useState } from 'react'
import { Container } from './Container'
import { dataCardNews } from '../data/dataCardNews'
import { CardNews } from './CardNews'
import { ShowMore } from '../UI/ShowMore'

export const NewsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? dataCardNews : dataCardNews.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Container id='news' className="pt-[80px] lg:pt-[140px]">
      <h2 className='font-bold text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather'>Новини на події</h2>

      <div className='flex justify-between items-end'>
        <p className='pt-3 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>

        <ShowMore
          text="Дивитись усі"
          onClick={toggleShowAll}
          showAll={showAll}
        />
      </div>

      <div className='flex justify-center flex-wrap gap-x-5 gap-y-8 pt-[60px]'>
        {
          visibleCards && visibleCards.map(card => (
            <CardNews card={card} key={card.id} />
          ))
        }
      </div>
    </Container>
  )
}
