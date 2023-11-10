import React from 'react'
import { Link } from 'react-router-dom'

export const SocialMediaBlock = ({social}) => {
  return (
    <Link to={social.link} 
    target="_blank" 
    className={`flex items-center text-xs leading-4 lg:text-sm lg:leading-[22px] py-2 hover:text-[${social.colorBrand}]`}
    >
      <img src={social.logo} />
      <p className='pl-2'>{social.text}</p>
    </Link>
  )
}
