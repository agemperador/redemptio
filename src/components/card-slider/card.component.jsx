import React from 'react'
import PropTypes from 'prop-types'

import {CardContainer} from './card.styles'

const Card = ({active,property}) =>{

    const {index,picture,city,address,bedrooms,
    bathrooms,carSpaces} = property;

    console.log(active, property);

    return(
        <CardContainer active={active==index} className='card' id={`card-${index}`}>
            <img src={picture} alt="city"/>
            <div className='details'>
                <span className='index'>
                    {index+1}
                </span>
                <p className='location'>
                    {city} <br/>
                    {address}
                </p>
                <ul className='features'>
                    <li className='icon-bed'>
                        {bedrooms}
                        <span>bedrooms</span>
                    </li>
                    <li className='icon-bath'>
                        {bathrooms}
                        <span>bathrooms</span>
                    </li>
                    <li className='icon-car'>
                        {carSpaces}
                        <span>parking</span>
                    </li>
                </ul>
            </div>
        </CardContainer>
    )
}

export default Card;