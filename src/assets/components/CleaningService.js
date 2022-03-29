import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CleaningService = () => {
  return (
    <section className='bg-darkTan  text-primary'>
      <div className='py-14 px-5 '>
        <h2 className='text-2xl'>Why Elida's cleaning service?</h2>
        <ul className='text-base'>
          <li>Celiac tousled irony 8-bit</li>
          <li>I'm baby master cleanse </li>
          <li>Cred shaman fanny pack</li>
          <li>Woke taiyaki thundercats</li>
          <li>cronut truffaut four </li>
        </ul>
        <div className='mt-8'>
          <a className='p-3 border-2' href="tel:425.244.5326">Book Cleaning</a>
        </div>
      </div>
    
    <figure>
      <StaticImage 
            src='../images/everdrop-gmbh-SqOMDOQb3ws-unsplash.jpg'
            alt=''
            placeholder='blurred'
            layout='fullWidth'
            className='z-0'
          />
    </figure>
  </section>
  )
}

export default CleaningService