import React from 'react'
import { Link } from 'gatsby'
import Layout from '../assets/components/Layout'

const about = () => {
  return (
    <Layout>
      <main className='page'>
        <section>
          <article>
            <h1>About Akin Olla</h1>
            <p>Akin Olla is a Nigerian-American political strategist and organizer. He is the host of This is The Revolution Podcast</p>
            <p>I'm baby +1 crucifix post-ironic, wolf cloud bread iceland shaman try-hard man bun letterpress wayfarers plaid. Vexillologist +1 before they sold out prism you probably haven't heard of them forage.</p>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default about
