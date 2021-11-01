import React,{useRef} from 'react';
import { Rerousel } from 'rerousel';

import './slider-footer.scss'


const SliderFooter = ({testimonios}) => {

    const ref = useRef(null)

    console.log(testimonios)
    return (
        <div className='slider-footer-container'>
            <Rerousel itemRef={ref} className='rerousel'>
                {testimonios.map(t => {
                return <div className='img-container'><img key={t.key} alt={t.image} src={t.image}  ref={ref}/></div>
            })
        }
            </Rerousel>
        </div>
    );
};

export default SliderFooter;