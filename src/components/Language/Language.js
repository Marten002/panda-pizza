import React, {useState, useRef, useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useCookies } from 'react-cookie'

import useOnClickOutside from "../../Hooks/useOnClickOutside/useOnClickOutside"
import useLocalStorage from "../../Hooks/useLocalStorage/useLocalStorage"

import './Language.scss'

const LANGUAGES = ['en', 'cz']

const Language = ({ className }) => {

    const [cookies, setCookie] = useCookies()
    const [dropdown, setDropdown] = useState(false)
    const { i18n } = useTranslation()
    const dropdownContainer = useRef(false)
    const language = useLocalStorage('get', 'i18nextLng')

    useEffect(() => {
        if ((!cookies.lng || LANGUAGES.indexOf(cookies.lng) === -1) || (LANGUAGES.indexOf(language.value) === -1)) {
            changeLanguage(LANGUAGES[0])
        }
    })

    useOnClickOutside(dropdownContainer, () => setDropdown(false))

    const changeLanguage = (lng) => {
        const aYearFromNow = new Date()
        aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)

        setCookie('lng', lng, {expires: aYearFromNow})
        i18n.changeLanguage(lng)
    }

    const handleCurrentLanguage = () => {
        return i18n.language.toUpperCase().slice(0, 2)
    }

    const handleClickDropdown = () => {
        setDropdown(!dropdown)
    }

    const handleClickLanguage = (language) => {

        changeLanguage(language)

        setDropdown(!dropdown)
    }

    return (
        <div
            className={`dropdown ${className} ${dropdown ? 'active' : ''}`}
            onClick={handleClickDropdown}
            ref={dropdownContainer}
        >
            <span className="dropdown__current">
                {handleCurrentLanguage()}
            </span>
            {
                dropdown
                ? <div className="dropdown__content">
                        <a
                            href='/'
                            className="dropdown__item"
                            onClick={(e) => {
                                e.preventDefault()
                                handleClickLanguage('en')
                            }}
                        >
                            <span>EN</span>
                        </a>
                        <a
                            href='/'
                            className="dropdown__item"
                            onClick={(e) => {
                                e.preventDefault()
                                handleClickLanguage('cz')
                            }}
                        >
                            <span>CZ</span>
                        </a>
                    </div>
                : null
            }
        </div>
    )
}

export default Language
