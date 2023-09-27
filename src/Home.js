import React from 'react'
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

export default function Home() {
  return (
    <>
     <main>
        <Hero />
        <Highlights />
        <hr></hr>
        <Testimonials />
        <hr></hr>
        <About />
     </main>
     <footer>
        <Footer />
     </footer>
   </>
  )
}
