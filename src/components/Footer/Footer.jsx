import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <article className='footer__container'>
            <p>© {new Date().getFullYear()} Proyecto hecho por <a href="https://github.com/ecc97" target="_blank" rel="noopener noreferrer">ecc97</a>. Todos los derechos reservados.</p>
        </article>
    </footer>
  )
}
