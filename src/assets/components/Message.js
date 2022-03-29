import React from 'react'
import FormSpree from './FormSpree'

const Message = () => {
  return (
    <section className='image_Bkg h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center pt-6 justify-center'>
      <span className='border-2 border-white bg-blue-500 w-16 h-16 rounded-full relative top-8 left-24'></span>
      <FormSpree />
    </section>
  )
}

export default Message