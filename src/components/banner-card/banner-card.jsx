import React from 'react'
import './banner-card.styles.scss'

const BannerCard = ({text}) => {
    console.log(text)
    return (
        <div className='card-container'>
            <p>{text}</p>
        </div>
    )
}

export default BannerCard
