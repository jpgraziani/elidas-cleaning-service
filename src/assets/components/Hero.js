import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='py-14 px-5'>
        <h2 className='text-3xl font-sans leading-tight mb-5'>Residental & Commerical Claning Services in Tucson</h2>
        <p className='text-base leading-9'>Locally owned and operated for over 25 years. Customers benefit from staffing continuity that reinforces residential knowledge and confidence.</p>
        <div className='mt-8'>
          <a className='p-3 border-2' href="tel:425.244.5326">call us now</a>
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