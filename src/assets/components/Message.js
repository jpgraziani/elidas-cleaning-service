import React from 'react'
import FormSpree from './FormSpree'
import badge from '../images/icon-badge.svg'

const Message = () => {
  return (
    <section className='message-container image_Bkg bg-cover bg-no-repeat bg-center pb-20 max-w-5xl'>
      <article className='grid grid-cols-1 sm:grid-cols-2'>
      <div className='mx-4 sm:col-start-2'>
      <img className='badge w-20 h-20 relative top-8 left-19' src={badge} alt='main cleaning servies' />
      <FormSpree />
      </div>
      </article>
    </section>
  )
}

export default Message