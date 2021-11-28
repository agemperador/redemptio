import React, { useState,useEffect } from 'react'
import BannerCard from '../banner-card/banner-card';
import './slider.scss'
import useInterval from '../../hooks/use-interval';

const Slider = ({testimonios}) => {

    const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

    const slideRight = () => {
      setIndex((index + 1) % testimonios.length); // increases index by 1
    };
    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(testimonios.length - 1); // returns last index of images array if index is less than 0
        } else {
            setIndex(nextIndex);
        }
    };

    useInterval(() => {
        // Your custom logic here
        slideRight();
    }, 8000);

    
    return (
        <div className="slider-container">
            
            {testimonios.map(t=>{
                
                console.log(t.key)
                
                return (
                <div className={t.key === index ? 'slide-active': 'slide'} key={t.key}>
                    {t.key ===index &&
                    (<BannerCard text={t.text} key={t.key} />)}
                </div>
                )
            })} 
        </div>
  );
}
 

export default Slider
