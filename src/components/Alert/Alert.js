import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import useLocalStorage from "../../Hooks/useLocalStorage/useLocalStorage"

import closeIcon from './images/closeIcon.svg'

import './Alert.scss'

const Alert = ({ className }) => {

    const { itemsPrice } = useSelector(({ cart }) => {
        return {
            itemsPrice: cart.itemsPrice
        }
    })
    const location = useLocation()
    const { t } = useTranslation()
    const [open, setOpen] = useLocalStorage('set', 'alert', true)
    const [isOpenMain, setIsOpenMain] = useLocalStorage('set', 'alert-main', true)

    const [isOpenCart, setIsOpenCart] = useLocalStorage('set', 'alert-cart', true)

    const storage = useLocalStorage('get', 'alert')

    const path = location.pathname
    const pages = ['/', '/sushi', '/sets', '/salad', '/drinks', '/other']

    const handleViewAlert = () => {

        const handleTimer = (fromHour, fromMinute, toHour, toMinute) => {

            const time = new Date()

            return !(time.getHours() > fromHour && time.getMinutes() > fromMinute && time.getHours() < toHour && time.getMinutes() > toMinute)
        }

        const totalPrice = itemsPrice > 1 && itemsPrice < 500

        if (path === '/cart') {
            if(totalPrice || (totalPrice && handleTimer(11, 30, 18, 0))) {
                setOpen(true)
            } else {
                setOpen(false)
            }
        } else if (pages.indexOf(path) !== -1) {
            if(storage === true || isOpenMain === true) {
                setOpen(true)
            } else {
                setOpen(false)
            }
        } else {
            setOpen(false)
        }

    }

    const handleCloseAlert = () => {

        const handleSetStateMain = () => {
            setOpen(!open)
            setIsOpenMain(true)
        }

        path === '/' && isOpenMain === true ? setOpen(open) : setOpen(!open); setIsOpenMain(false)

        path === '/cart' && isOpenCart === true ? handleSetStateMain() : setOpen(!open); setIsOpenCart(false)
    }

    useEffect(() => {
        setIsOpenMain(true)
        setIsOpenCart(true)
    }, [])

    useEffect(() => {
        path === '/' && isOpenMain === true ? setOpen(true) : setOpen(open)

        path === '/cart' && isOpenCart === true ? setOpen(true) : setOpen(open)
    }, [path])

    useEffect( () => {

        handleViewAlert()

    })

    return (
        <>
            {
                open
                ? <div className={`alert ${className}`}>
                    <div className="alert__text">
                        {t("Header.Contact.text")}
                    </div>
                    {
                        path !== '/cart'
                        ? <div
                            className="alert__close"
                            onClick={handleCloseAlert}
                        >
                            <img src={closeIcon} alt="close" className="alert__image"/>
                        </div>
                        : null
                    }
                </div>
                : null
            }
        </>
    )
}

export default Alert
