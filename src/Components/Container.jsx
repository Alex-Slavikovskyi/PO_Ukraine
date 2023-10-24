import React from 'react'

export const Container = ({ children, className }) => {
  return (
    <div
      className={
        className +
        ` px-[24px] lg:px-[46px]`
      }
    >
      {children}
    </div>
  )
}
