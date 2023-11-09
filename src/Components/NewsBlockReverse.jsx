import React from 'react'

export const NewsBlockReverse = ({ news }) => {
  return (
    <div className='pt-6 md:pt-[60px]'>
      <div className='md:flex justify-between items-start gap-6'>
        <img className='md:hidden w-full md:w-[320px] md-2:w-[552px]' src={news.imgNewsPage2} />
        <p className='pt-3 md:pt-0 text-xs leading-5 lg:text-sm lg:leading-7'>
          {news.text2}
        </p>
        <img className='hidden md:block w-full md:w-[320px] md-2:w-[552px]' src={news.imgNewsPage2} />
      </div>
    </div>
  )
}
