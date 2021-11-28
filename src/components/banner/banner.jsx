import React,{useEffect,useState} from 'react'
import './banner.scss'
import BannerCard from '../banner-card/banner-card'
import SliderFooter from '../slider-footer/slider-footer'
import Slider from '../slider-empe/slider'


const Banner = () => {
    const [testimonios, setTestimonios] = useState([]) 
    
    useEffect(()=>{
       setTestimonios([
           {text:'"De la luz nace la oscuridad, y de la oscuridad nace la luz"',key:0},
           {text:'"LALALAL ipsum dolor sit amet consectetur, adipisicing elit."',key:1},
           {text:'"Lorem ipsum dolor sit amet consectetur, adipisicing elit. "',key:2},
           {text:'"Lorem ipsum dolor sit amet consectetur, adipisicing elit. "',key:3}
       ]);
    },[]);
    return (
        <div className='banner-container'>
            <h2 className='titulo-banner'>Redemptio</h2>
            <img className='background' src="images/banner.jpeg" alt="" />      
            <Slider  testimonios ={testimonios}/>
           
            
        </div>
    )
}

export default Banner
