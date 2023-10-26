import React from 'react'
import { Link } from 'react-router-dom'

export const SocialMediaBlock = ({social}) => {
  return (
    <Link to={social.link} target="_blank" className='flex text-xs leading-4 lg:text-sm lg:leading-[22px] py-2'>
      <img src={social.logo} />
      <p className='pl-4'>{social.text}</p>
    </Link>
  )
}
