import React from 'react'
import Highlights from './Highlights'
import Testimonials from './Testimonials'
import About from './About'
import Hero from './Hero'

export default function Main() {
  return (
    <div className='Main'>
        <Hero />
        <Highlights />
        <hr />
        <Testimonials />
        <hr />
        <About />
    </div>
  )
}
