import React from 'react'

export const ContactsBlock = ({ contact }) => {
  return (

    <div className='flex text-xs leading-4 lg:text-sm lg:leading-[22px] pb-4'>
      <img src={contact.logo} />
      <p className='pl-4'>{contact.text}</p>
    </div>

  )
}
