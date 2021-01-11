import React from 'react'
import Logo from '../Logo/Logo'
import Contact from './components/Contact/Contact'

import logoOrangeInline from './images/preLogoOrange.svg'
import logoOrange from './images/logoOrange.svg'
import instagram from './images/instagram.svg'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__item">
                <a href="https://www.instagram.com/panda.prague/" target="_blank" rel="noopener noreferrer" className="footer__link">
                    <Contact 
                        image={instagram}
                        text="panda.prague"
                    />
                </a>
            </div>
            <div className="footer__item">
                <Logo
                    className="logo--footer"
                    image={logoOrangeInline}
                    caption={logoOrange}
                />
            </div>
            <div className="footer__item">
                <Contact 
                    text="Dobronická 50/9, Prague"
                />
            </div>    
        </footer>
    )
}

export default Footer
