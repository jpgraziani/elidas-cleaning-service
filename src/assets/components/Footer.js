import React from 'react'
import {TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialInstagramCircular} from 'react-icons/ti'

const Footer = () => {
  return (
    <footer className='bg-primary text-white container'>
      <div>
        <h2 className='h2-title'>Elida</h2>
        <span>cleaning service</span>
      </div>
      <div className='my-14'>
          <a className='btn' href="tel:425.244.5326">Book Cleaning</a>
      </div>
     
      <ul className='mt-8 p-text border-t-2 border-white'>
        <li className='pt-8'><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
   
      <ul className='mt-8 border-t-2 border-white pb-2 flex pt-8'>
        <li className='pb-6 pr-4'><a href='#'><TiSocialInstagramCircular className='text-6xl' /></a></li>
        <li className='pb-6 pr-4'><a href='#'><TiSocialTwitterCircular className='text-6xl' /></a></li>
        <li className='pb-6 pr-4'><a href='#'><TiSocialFacebookCircular className='text-6xl' /></a></li>
      </ul>
      <div className='flex flex-col items-center text-center mt-6'>
        <p>@copyright elidas cleaning service, LLC 2022</p>
        <p className='mt-2'><a href="https://www.graziani.dev">designed and built by graziani.dev</a></p>
      </div> 
    </footer>
  )
}

export default Footer
