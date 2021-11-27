import React,{useEffect,useState} from 'react'
import './banner.scss'
import BannerCard from '../banner-card/banner-card'
import SliderFooter from '../slider-footer/slider-footer'
import Slider from '../slider-empe/slider'


const Banner = () => {
    const [testimonios, setTestimonios] = useState([]) 
    useEffect(()=>{
       setTestimonios([
           {text:'"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque maxime, assumenda consectetur esse reiciendis nisi doloribus porro necessitatibus aut sapiente veniam magni mollitia vero? Est tempora nostrum natus fuga?"',key:0},
           {text:'"LALALAL ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque maxime, assumenda consectetur esse reiciendis nisi doloribus porro necessitatibus aut sapiente veniam magni mollitia vero? Est tempora nostrum natus fuga?"',key:1},
           {text:'"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque maxime, assumenda consectetur esse reiciendis nisi doloribus porro necessitatibus aut sapiente veniam magni mollitia vero? Est tempora nostrum natus fuga?"',key:2},
           {text:'"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque maxime, assumenda consectetur esse reiciendis nisi doloribus porro necessitatibus aut sapiente veniam magni mollitia vero? Est tempora nostrum natus fuga?"',key:3}
       ]);
    },[]);
    return (
        <div className='banner-container'>
            <h2 className='titulo-banner'>Redemptio</h2>
            <img src="images/banner.jpeg" alt="" />      
            <Slider  testimonios ={testimonios}/>
           
            
        </div>
    )
}

export default Banner
