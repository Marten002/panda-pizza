import React from 'react'
import { Link } from 'react-router-dom'

import './Logo.scss'

const Logo = ({ className, image, caption }) => {
    return (
        <div className={`logo ${className}`}>
            <Link className="logo__link" to="/">
                <img src={image} alt="logo" className="logo__image"/>
                <img src={caption} alt="caption" className="logo__caption"/>
            </Link>
        </div>
    )
}

export default Logo
