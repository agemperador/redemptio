import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <header className='header-container'>
            
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Metahipnosis</li>
                    <div className="logo">ACSDS</div>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
