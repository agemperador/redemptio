import React from 'react'
import './home.page.scss'

const HomePage = () => {
    console.log("hola tefi")
    return (
        <div className='home-container'>
            <div className="home-info">
                <div className="izq">
                    <h3>Metahipnosis</h3>
                    <h4>Interconexiones Universales</h4>
                </div>
                <div className="der">
                    <p>Es un sistema de sanación chamánico creado por el chamán Alejandro Kaplan. Este sistema, permite sanar cuerpo, mente y alma. El sistema es considerado como medicina alternativa y preventiva.</p>
                </div>
            </div>
        </div>
    )   
}

export default HomePage
