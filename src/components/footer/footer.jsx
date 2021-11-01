import React,{useState,useEffect} from 'react'
import RedesSociales from '../redes-sociales/redes-sociales'
import SliderFooter from '../slider-footer/slider-footer'

import './footer.scss'

const Footer = () => {
    const [links, setLinks] = useState([]) 
    const currentTime = new Date().getFullYear()  // returns the current year
    const [testimonios, setTestimonios] = useState([]) 


    
    useEffect(()=>{
        setLinks([
            {name:"Nosotros", link:'/nosotros', childrens:[]},
            {name:"Nosotros", link:'/nosotros', childrens:[]},
            {name:"Nosotros", link:'/nosotros', childrens:[]},
            {name:"Nosotros", link:'/nosotros', childrens:[]},
        ]);
        setTestimonios([
            {image:'images/test.png',key:1},
            {image:'images/test.png',key:2},
            {image:'images/test.png',key:3},
            {image:'images/test.png',key:4}
        ]);
    },[]);

    const renderLinks=(links)=>{
        return links.map(link => {
            return <li>{link.name}</li>
        });
    }
    return (
        <footer className='footer-container'>
            <div className="content">
                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        {
                            renderLinks(links)
                        }
                    </ul>
                </div>
                <div className="testimonios">
                    <h3>Testimonios</h3>
                    <div className='slider-testimonios'>
                        <SliderFooter testimonios={testimonios}/>
                    </div>
                </div>
            </div>
            <div className="extra">
                <h3>Metahipnosis</h3>
                <p>Interconexiones Universales</p>
                <div className="redes-sociales">

                <RedesSociales />
                </div>
                
            </div>
            <div className="footer">TempWeb {currentTime}</div>
        </footer>
    )
}

export default Footer
