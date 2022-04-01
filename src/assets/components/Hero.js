import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className='bg-tan text-primary'>
      <div className='py-14 px-5'>
        <h2 className='h2-title mb-3'>Residental & Commerical Claning Services in Tucson</h2>
        <p className='p-text'>Locally owned and operated for over 25 years. Customers benefit from staffing continuity that reinforces residential knowledge and confidence.</p>
        <div className='mt-8'>
          <a className='btn' href="tel:425.244.5326">call us now</a>
        </div>
      </div>
      
      <figure>
        <StaticImage 
          src='../images/yehleen-gaffney-raxI_EcyfGw-unsplash.jpg'
          alt=''
          placeholder='blurred'
          layout='fullWidth'
          className=''
        />
      </figure>
     
    </section>
   
  )
}

export default Hero