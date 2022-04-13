import React from 'react'
import bottle from '../images/cleaning-icons_bottles-and-bucket.svg'
import kitchen from '../images/cleaning-icons_kitchen.svg'
import toilet from '../images/cleaning-icons_toilet.svg'
import stars from '../images/cleaning-icons_stars.svg'
// import wave from '../images/wave.svg'
// import waveFlipped from '../images/wave-flipped.svg'

import './Service.css'

const Services = () => {
  return (
    <section className='bg-primary'>
      {/* <div className='static height-svg'>
      <img className='relative -top-10 svg-wave w-screen' src={wave} />
      </div> */}
      <section className='services-provided max-w-5xl text-white text-center z-10 flex justify-center items-center'>
      
      <div className='container'>
      
       <div className=''>
        <h2 className='h2-title'><span className='line-break-title'>Weekly and</span> Bi-weekly Cleaning Services</h2>
      </div>
      <section className='card-container mt-12 flex flex-col justify-center sm:flex sm:flex-row sm:flex-wrap'>
        <article className='service-card'>
          <div className='flex items-center'>
            <div className='hr-rule' />
            <figure className='icon-container'>
              <img className='h-20 absolute top-2 left-2' src={bottle} alt='main cle`aning servies' />
            </figure>
            <div className='hr-rule' />
          </div>
          <header className='header-title'>
            Bedroom, Living Room, 
            Den & common Areas
          </header>
          <p className='p-text'>Our general regular cleaning includes the bathrooms, the kitchen, the bedrooms, the living room and the office (den). Additionally dust the furniture, apply polish, dust the TVs, computers, and vacuum/mop floors.</p>
        </article>
        <article className='service-card mt-12'>
          <div className='flex items-center'>
            <div className='hr-rule' />
            <figure className='icon-container'>
              <img className='h-20 absolute top-2' src={toilet} alt='cleaning for bathroom areas' />
            </figure>
            <div className='hr-rule' />
          </div>
          <header className='header-title'>
          Clean the bathroom
          </header>
          <p className='p-text'>Toilets, showers, tubs, sinks, mirrors, dust the light fixtures, vacuum and mop the floors.</p>
        </article>
        <article className='service-card mt-12'>
          <div className='flex items-center'>
            <div className='hr-rule' />
            <figure className='icon-container'>
              <img className='h-20 absolute' src={kitchen} alt='cleaning for kitchen area' />
            </figure>
            <div className='hr-rule' />
          </div>
          <header className='header-title'>
          Clean the Kitchen
          </header>
          <p className='p-text'>
            Clean the top of the stove, clean the inside and outside of the microwave, wipe off the outside the refrigerator and dish washer, wipe off the kitchen counters, wipe off the outside of the cabinets within a reachable distance, empty the trash cans and replace bag liners, and clean the floors.</p>
        </article>
        <article className='service-card mt-12'>
          <div div className='flex items-center'>
            <div className='hr-rule' />
            <figure className='icon-container'>
              <img className='h-20 absolute' src={stars} alt='extra services with extra charges' />
            </figure>
            <div className='hr-rule' />
          </div>
          <header className='header-title'>
          Extra services / extra charge
          </header>
          <ul className='p-text list-disc text-left'>
            <li>Clean inside the refrigerator</li>
            <li>Clean inside the oven</li>
            <li>Clean walls and doors</li>
            <li>Clean baseboards</li>
          </ul>
        </article>
      </section>
      </div>
      
    </section>
    {/* <img className='' src={waveFlipped} /> */}
      
      
    </section>
    
  )
}

export default Services