import React from 'react'

export const Container = ({ children, className, id }) => {
  return (
    <div 
      id={id}
      className={
        className +
        ` px-[26px] md:px-[34px] lg:px-[46px] xl:w-[1220px] lg:mx-auto`
      }
    >
      {children}
    </div>
  )
}
