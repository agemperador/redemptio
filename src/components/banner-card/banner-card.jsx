import React from 'react'
import './banner-card.styles.scss'

const BannerCard = ({text}) => {
    return (
        <div className='card-container'>
            <p className='card-text'>{text}</p>
        </div>
    )
}

export default BannerCard
