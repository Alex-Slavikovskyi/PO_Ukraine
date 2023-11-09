import React from 'react'
import { NewsBlock } from './NewsBlock';
import { NewsBlockReverse } from './NewsBlockReverse';

export const NewsList = ({ news }) => {

  return (
    <div className='pt-3 md:pt-6'>
      <div className='md:flex justify-between items-start'>
        <h2 className='font-bold text-lg md:text-[22px] lg:text-[32px] text-[#0C5AB5] font-Merriweather leading-6 md:leading-[30px] lg:leading-[32px]'>
          {news.title}
        </h2>
        <p className='pt-1 md:pt-0 text-sm'>04.10.2023</p>
      </div>
      <p className='pt-3 text-xs leading-5 lg:text-sm lg:leading-7'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </p>


      {/* News section */}
      {
        news.text1 && <NewsBlock news={news} key={news.newsId} />
      }
      
      {
        news.text2 && <NewsBlockReverse news={news} key={`${news.newsId} +sd`} />
      }
      
    </div>
  )
}
