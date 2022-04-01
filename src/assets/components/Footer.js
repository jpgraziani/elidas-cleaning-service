import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-white container'>
      <div>
      <h2 className='h2-title'>Elida</h2>
      <span>cleaning service</span>
      </div>
      <div className='mt-8'>
          <a className='btn' href="tel:425.244.5326">Book Cleaning</a>
        </div>
     
      <ul className='mt-8 p-text border-t-2 border-white'>
        <li className='pt-8'><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
   
      <ul className='mt-8 p-text border-t-2 border-white pb-2'>
        <li className='pb-6 pt-8'><a href='#'><div className='w-16 h-16 border-2 border-white rounded-full'></div></a></li>
        <li className='pb-6'><a href='#'><div className='w-16 h-16 border-2 border-white rounded-full'></div></a></li>
        <li className='pb-6'><a href='#'><div className='w-16 h-16 border-2 border-white rounded-full'></div></a></li>
      </ul>
      <div>

      </div>
    </footer>
  )
}

export default Footer
