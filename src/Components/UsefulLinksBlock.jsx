import React from 'react'

export const UsefulLinksBlock = ({linkElem}) => {
  return (
    <div className='px-0 lg:px-[10px] py-[10px]'>
      <a href={linkElem.link} >{linkElem.text}</a>
    </div>
  )
}
