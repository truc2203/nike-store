import React from 'react'

const Socials = ({icon}) => {
  return (
    <>
      <img className='w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-300 hover:scale-110' src={icon} alt="" />
    </>
  )
}

export default Socials