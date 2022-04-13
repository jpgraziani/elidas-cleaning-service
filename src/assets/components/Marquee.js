import React from 'react'
import './Marquee.css'

const Marquee = () => {
  return (
    <p className="marquee">
    <span className='pr-4'>operated for over 25 years</span>
    <span className='pr-4'>operated for over 25 years</span>
    <span className='pr-4'>operated for over 25 years</span>
    {/* <span>only tech</span>
    <span>with a delay</span> */}
    </p>
  )
}

export default Marquee

/*
<div id='scroll-container' className='bg-primary text-white'>
      <p id='scroll-text' className='text-base py-4 whitespace-nowrap'>
        <span className='pr-8'>|</span>
        <span className='pr-8'>operated for over 25 years</span>
        <span className='pr-8'>|</span>
        <span className='pr-8'>operated for over 25 years</span>
        <span className='pr-8'>|</span>
      </p>
    </div>

*/