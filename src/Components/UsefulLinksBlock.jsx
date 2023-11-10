import React from 'react'

export const UsefulLinksBlock = ({linkElem}) => {
  return (
    <div className='px-0 lg:px-[10px] py-[10px] hover:text-[#0C5AB5]'>
      <a href={linkElem.link} >{linkElem.text}</a>
    </div>
  )
}
