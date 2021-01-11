import React  from 'react'

import Logo from '../Logo/Logo'
import Contact from './components/Contact/Contact'

import preLogoBlack from './images/preLogoBlack.svg'
import logoBlack from './images/logoBlack.svg'

import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Logo
                className="logo--header"
                image={preLogoBlack}
                caption={logoBlack}
            />
            <Contact/>
        </header>
    )
}

export default Header
