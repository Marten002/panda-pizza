import React, { useEffect, useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import './Button.scss'

const Button = ({ buttonPath, className, image, cart, cartCount, text, isActive }) => {

    const { t } = useTranslation()
    const location = useLocation()
    const [activeClass, setActiveClass] = useState('')

    const path = location.pathname

    const handleCallbackClassName = useCallback(
        () => {
            const handleSetActiveClass = () => {
                return buttonPath === path ? setActiveClass('select__button--active') : setActiveClass('')
            }
            handleSetActiveClass()
        },
        [path, buttonPath]
    )

    useEffect(() => {
        handleCallbackClassName()
    }, [path, handleCallbackClassName])

    return (
        <>
            <button
                onClick={handleCallbackClassName}
                className={`select__button ${activeClass} ${className ? className : ''} ${isActive ? 'select__button--active': ''}`}
            >
                <img src={image} alt="button" className="button__image"/>
                {
                    cart
                    ? <span className="select__count">{cartCount}</span>
                    : null
                }
            </button>
            {
                text
                ? <span className="select__text">
                    {t(`Main.Tab.Nav.${text}`)}
                  </span>
                : null
            }
        </>
    )
}

export default Button
