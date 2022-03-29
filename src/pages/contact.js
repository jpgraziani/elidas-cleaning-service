import React from 'react'
import Layout from '../assets/components/Layout'

const contact = () => {
  return (
    <Layout>
      <section className='contact-page'>
          <article>
          <h3>Want to get in touch?</h3>
          <p>I'm baby +1 crucifix post-ironic, wolf cloud bread iceland shaman try-hard man bun letterpress wayfarers plaid. Vexillologist +1 before they sold out prism you probably haven't heard of them forage.</p>
          <p>Single-origin coffee you probably haven't heard of them pabst taxidermy affogato fam typewriter. Organic trust fund ramps lo-fi marfa adaptogen poutine neutra. Pop-up squid af letterpress biodiesel street art migas hammock edison bulb.</p>
          <p>Vegan cliche la croix lumbersexual forage. Humblebrag vegan PBR&B etsy coloring book kale chips truffaut raclette thundercats readymade pitchfork jean shorts.</p>
          </article>
          <article>
            <form action='' className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>Your name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>Your email</label>
                <input type='text' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='message'>message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>submit</button>
            </form>
          </article>
        </section>
    </Layout>
  )
}

export default contact
