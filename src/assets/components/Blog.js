import React from 'react'
import blogImg from '../images/cdc-VRpjDw3WqqI-unsplash.jpg'

const Blog = () => {
  return (
    <section className='bg-dots-pattern dots-pattern bg-repeat bg-contain'>
      <div className='flex flex-col content-center p-4 bg-white'>
        <h2 className='text-2xl '>Check out our blog, Rinse and Repeat</h2>
        <article className='border-2 border-black'>
        <img src={blogImg} alt='blog post image' />
        <header>Title here</header>
        <p>Mumblecore 90's enamel pin deep v irony try-hard slow-carb adaptogen. Butcher irony cred, thundercats flannel hexagon drinking vinegar.
      </p>
        </article>
        <div><span>[  ]</span><span>[  ]</span></div>
      </div>
     
     
    </section>
  )
}

export default Blog