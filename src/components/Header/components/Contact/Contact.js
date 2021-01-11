import React from 'react'
import useWindowSize from '../../../../Hooks/useWindowSize/useWindowSize'

import Language from '../../../Language/Language'

import phone from './images/phone.svg'

import './Contact.scss'

const Contact = () => {

    const windowSize = useWindowSize()

    return (
        <div className={`contact ${windowSize.width <= 768 ? 'contact--mobile' : ''}`}>
            <div className="contact__menu">
                {
                    windowSize.width <= 768 &&
                    <div className="contact__menu-text">
                        <a href="tel:420775668764">
                            <img src={phone} alt="phone" className="contact__image"/>
                        </a>
                    </div>
                }
                <Language
                    className="dropdown--language"
                />
                {
                    windowSize.width > 768 &&
                    <div className="contact__menu-text">
                        <a href="tel:420774042570">
                            +420 774 042 570
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default Contact
