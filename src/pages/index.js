import React from 'react';
import Layout from '../assets/components/Layout';
import Hero from '../assets/components/Hero'
import Marquee from '../assets/components/Marquee';
import CleaningService from '../assets/components/CleaningService';
import Services from '../assets/components/Services';
import Message from '../assets/components/Message';
import Blog from '../assets/components/Blog';

export default function Home() {
  return (
    <Layout>
      <main>
         <Hero />
         <Marquee />
         <CleaningService />
         <Services />
         <Message />
         <Blog />
      </main>
    </Layout>
  )
}
