import React from 'react'

export const NewsBlock = ({ news }) => {
  return (
    <div className='pt-6 md:pt-[60px]'>
      <div className='md:flex justify-between items-start gap-6'>
        <img className='w-full md:w-[320px] md-2:w-[552px]' src={news.imgNewsPage1} />
        <p className='pt-3 md:pt-0 text-xs leading-5 lg:text-sm lg:leading-7'>
          {news.text1}
        </p>
      </div>
    </div>
  )
}
