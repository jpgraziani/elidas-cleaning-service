import React from 'react'

const Services = () => {
  return (
    <section className='bg-primary text-white container'>
       <div className=''>
        <h2 className='h2-title'>Weekly and Bi-weekly Cleaning Services</h2>
      </div>
      <section>
        <article>
          <div className='border-2 border-black w-16 h-16 rounded-full' />
          <header className='text-xl'>
            Bedroom, Living Room, 
            Den & common Areas
          </header>
          <p className='text-base'>Our general regular cleaning includes the bathrooms, the kitchen, the bedrooms, the living room and the office (den). Additionally dust the furniture, apply polish, dust the TVs, computers, and vacuum/mop floors.</p>
        </article>
        <article>
          <div className='border-2 border-black w-16 h-16 rounded-full' />
          <header className='text-xl'>
          Clean the bathroom
          </header>
          <p className='text-base'>Toilets, showers, tubs, sinks, mirrors, dust the light fixtures, vacuum and mop the floors.</p>
        </article>
        <article>
          <div className='border-2 border-black w-16 h-16 rounded-full' />
          <header className='text-xl'>
          Clean the Kitchen
          </header>
          <p className='text-base'>
            Clean the top of the stove, clean the inside and outside of the microwave, wipe off the outside the refrigerator and dish washer, wipe off the kitchen counters, wipe off the outside of the cabinets within a reachable distance, empty the trash cans and replace bag liners, and clean the floors.</p>
        </article>
        <article>
          <div className='border-2 border-black w-16 h-16 rounded-full' />
          <header className='text-xl'>
          Extra services / extra charge
          </header>
          <ul className='text-base'>
            <li>Clean inside the refrigerator</li>
            <li>Clean inside the oven</li>
            <li>Clean walls and doors</li>
            <li>Clean baseboards</li>
          </ul>
        </article>
      </section>
    </section>
  )
}

export default Services