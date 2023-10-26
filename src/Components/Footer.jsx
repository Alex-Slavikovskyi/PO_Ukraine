import React from 'react'
import { Container } from './Container'
import { Link } from 'react-router-dom'
import { ContactsBlock } from './ContactsBlock';
import { dataContacts } from '../data/dataContacts';
import { dataSocialMedia } from '../data/dataSocialMedia';
import { SocialMediaBlock } from './SocialMediaBlock';
import { dataUsefulLinks } from '../data/dataUsefulLinks';
import { UsefulLinksBlock } from './UsefulLinksBlock';

export const Footer = () => {
  return (
    <div>
      <div>
        <img src='./img/baner-footer.png' className='w-full bg-cover' />
      </div>

      <Container className="flex justify-between pb-8">
        <Link to="/" className='w-[78px] lg:w-[168px] hover:cursor-pointer flex items-center'>
          <img src='./img/logo_ukr.svg' />
        </Link>

        <div className='w-[141px] lg:w-[202px] '>
          <h3 className='font-bold text-base  lg:text-xl pt-6'>Корисні посилання</h3>
          <div className='flex flex-col text-xs leading-4 lg:text-sm lg:leading-5 pt-4'>
            {
              dataUsefulLinks && dataUsefulLinks.map(linkElem => (
                <UsefulLinksBlock linkElem={linkElem} key={linkElem.id} />
              ))
            }
          </div>
        </div>

        <div className=' w-[264px] lg:w-[305px]'>
          <h3 className='font-bold text-base  lg:text-xl pt-6'>Контакти</h3>
          <div className='text-xs leading-4 lg:text-sm lg:leading-[22px] pt-4'>
            {
              dataContacts && dataContacts.map(contact => (
                <ContactsBlock contact={contact} key={contact.id} />
              ))
            }
          </div>
        </div>

        <div className=' w-[129px] lg:w-[184px]'>
          <h3 className='font-bold text-base  lg:text-xl pt-6'>Соціальні мережі</h3>
          <div className='text-xs leading-4 lg:text-sm lg:leading-[22px] pt-4'>
            {
              dataSocialMedia && dataSocialMedia.map(social => (
                <SocialMediaBlock social={social} key={social.id} />
              ))
            }
          </div>
        </div>


      </Container>
    </div>
  )
}

{/* <a href="#news" className='w-[78px] lg:w-[168px] hover:cursor-pointer flex items-center'>
  <img src='./img/logo_ukr.svg' />
</a> */}
