import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className='hero-section' id='home'>
      <article className='hero-text'>
        <h2>Bienvenido a Code World</h2>
        <h3>Descubre un mundo de posibilidades y comparte consejos e ideas para tus proyectos.</h3>
        <a href="#contact" className="cta-button">Conoce más</a>
      </article>
      <article className='hero-circle'>
        <div className="growing-circle"></div>
      </article>
    </section>
  )
}
