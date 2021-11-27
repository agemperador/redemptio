import React,{useRef} from 'react';
import { Rerousel } from 'rerousel';
import BannerCard from '../banner-card/banner-card';

import './slider-footer.scss'


const SliderFooter = ({testimonios}) => {

    
    const ref = useRef(null)

    return (
        <div className='slider-footer-container'>
            <Rerousel itemRef={ref} >
                {testimonios.map(texto => {
                    console.log(texto)
                return<BannerCard className='banner-card-container' key={texto.key} text = {texto.text} ref={ref}/>
            })
        }
            </Rerousel>
        </div>
    );
};

export default SliderFooter;