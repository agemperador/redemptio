import React from 'react'
import  './redes-sociales.scss'
import {SocialIcon} from 'react-social-icons'

const RedesSociales = () => {

    return (
        <div className = 'container'>
            <SocialIcon className='socialIcon' url="https://facebook.com/" network='facebook'  fgColor="#fff"/>
            <SocialIcon className='socialIcon' url="https://twitter.com/" network="twitter" fgColor="#fff"/>
            <SocialIcon className='socialIcon' url="https://instagram.com/" network='instagram' fgColor="#fff"/>
            <SocialIcon className='socialIcon' url="https://linkedin.com/" network='linkedin' fgColor="#fff"/>
        </div>
    )
}

export default RedesSociales
