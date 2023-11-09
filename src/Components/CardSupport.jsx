import React, { useState } from 'react'
import { Container } from './Container'

export const CardSupport = ({ card, }) => {
  const [isShowMore, setIsShowMore] = useState(card.isShow);

  const toggleShowAll = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="pt-8 lg:pt-[40px] ">
      <button
        className='text-white bg-[#0C5AB5] rounded-r rounded-bl w-full rounded-tl-[32px] h-[51px] flex justify-between items-center'
        onClick={toggleShowAll}
      >
        <h3 className='pl-6 font-bold text-xs md:text-sm lg:text-xl text-left'>{card.header}</h3>
        <div className='pr-7 ' >
          {
            isShowMore ? (
              <svg className=' w-[11px] h-[11px] lg:w-[17px] lg:h-[17px]' viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{ fill: '#FFF' }} fillRule="evenodd" clipRule="evenodd" d="M3.49998 0.5H11C11.1326 0.5 11.2598 0.552678 11.3535 0.646447C11.4473 0.740215 11.5 0.867392 11.5 1V8.5C11.5 8.63261 11.4473 8.75978 11.3535 8.85355C11.2598 8.94732 11.1326 9 11 9C10.8674 9 10.7402 8.94732 10.6464 8.85355C10.5527 8.75978 10.5 8.63261 10.5 8.5V2.20667L1.35331 11.3533C1.25853 11.4417 1.13316 11.4897 1.00363 11.4874C0.874097 11.4852 0.750507 11.4327 0.658898 11.3411C0.567289 11.2495 0.514815 11.1259 0.512529 10.9963C0.510244 10.8668 0.558326 10.7414 0.646646 10.6467L9.79331 1.5H3.49998C3.36737 1.5 3.24019 1.44732 3.14643 1.35355C3.05266 1.25979 2.99998 1.13261 2.99998 1C2.99998 0.867392 3.05266 0.740215 3.14643 0.646447C3.24019 0.552678 3.36737 0.5 3.49998 0.5Z" fill="#0C5AB5" />
              </svg>
            ) : (
              <svg className=' w-[11px] h-[11px] lg:w-[17px] lg:h-[17px]' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path style={{ fill: '#FFF' }} fillRule="evenodd" clipRule="evenodd" d="M0.646715 0.646715C0.740465 0.553081 0.867548 0.500488 1.00005 0.500488C1.13255 0.500488 1.25963 0.553081 1.35338 0.646715L10.5 9.79338V3.50005C10.5 3.36744 10.5527 3.24026 10.6465 3.14649C10.7403 3.05273 10.8674 3.00005 11 3.00005C11.1327 3.00005 11.2598 3.05273 11.3536 3.14649C11.4474 3.24026 11.5 3.36744 11.5 3.50005V11C11.5 11.1327 11.4474 11.2598 11.3536 11.3536C11.2598 11.4474 11.1327 11.5 11 11.5H3.50005C3.36744 11.5 3.24026 11.4474 3.14649 11.3536C3.05273 11.2598 3.00005 11.1327 3.00005 11C3.00005 10.8674 3.05273 10.7403 3.14649 10.6465C3.24026 10.5527 3.36744 10.5 3.50005 10.5H9.79338L0.646715 1.35338C0.553081 1.25963 0.500488 1.13255 0.500488 1.00005C0.500488 0.867548 0.553081 0.740465 0.646715 0.646715Z" fill="#0C5AB5" />
              </svg>
            )
          }



        </div>
      </button>

      {
        isShowMore &&

        <div className='border-l-4 rounded-l border-[#0C5AB5] text-[#0C5AB5] mt-3 pl-4 text-xs lg:text-sm leading-[22px] lg:leading-7'>
          <div>
            <p className='inline pr-2 font-bold'>{card.nameField}</p>
            <p className='inline'>{card.nameData}</p>
          </div>

          <div>
            <p className='inline pr-2 font-bold'>{card.codeField}</p>
            <p className='inline'>{card.codeData}</p>
          </div>

          <div>
            <p className='inline pr-2 font-bold'>{card.bankField}</p>
            <p className='inline'>{card.bankData}</p>
          </div>

          <div>
            <p className='inline pr-2 font-bold'>{card.accountField}</p>
            <p className='inline'>{card.accountData}</p>
          </div>

          <div>
            <p className='inline pr-2 font-bold'>{card.detailsField}</p>
            <p className='inline'>{card.detailsData}</p>
          </div>
        </div>
      }
    </div>
  )
}
