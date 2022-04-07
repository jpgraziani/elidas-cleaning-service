import React from 'react'
import FormSpree from './FormSpree'
import badge from '../images/icon-badge.svg'

const Message = () => {
  return (
    <section className='image_Bkg h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center pt-6 justify-center'>

     
        <img className='w-20 h-20 relative top-8 left-24' src={badge} alt='main cleaning servies' />
     
      <FormSpree />
    </section>
  )
}

export default Message