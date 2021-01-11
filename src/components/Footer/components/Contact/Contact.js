import React from 'react'

import './Contact.scss'

const Contact = ({ image, text }) => {
    return (
        <div className="footer__contact">
            {
                image
                ? <img src={image} alt="contact"/>
                : null
            }
            <span>{text}</span>
        </div>
    )
}

export default Contact
