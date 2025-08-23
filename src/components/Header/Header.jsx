import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='header' id='header'>
      <h1>Code World</h1>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#home'>Inicio</a>
          </li>
          <li className='nav-item'>
            <a href='#contact'>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
