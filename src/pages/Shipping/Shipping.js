import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { useSelector, useDispatch } from "react-redux"

/* Actions */
import { handleDeliveryMethod } from "../../Redux/actions/delivery"
/* Actions */

import CartLink from "../../components/CartLink/CartLink"
import Headline from "../../components/Headline/Headline"
import SwitchButton from "../../components/SwitchButton/SwitchButton"
import Background from "../../components/Background/Background"

import backgroundImage from "./images/backgroundImage.svg"

import './Shipping.scss'

const Shipping = () => {

    const { itemsPrice, delivery } = useSelector(({ cart, delivery }) => {
        return {
            itemsPrice: cart.itemsPrice,
            delivery: delivery.method
        }
    })

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [method, setMethod] = useState(delivery)

    useEffect( () => {
        dispatch(handleDeliveryMethod(method))
    }, [method, dispatch])

    return (
        <>
            <Background
                image={backgroundImage}
                alt="background-home"
                className="app__background"
                withAnimation={false}
            />
            <main className="cart shipping">
                <div className="cart__header">
                    <CartLink
                        className="cart__link--back"
                        type="function"
                        image={true}
                        text={t("Shipping.CartLink.text")}
                    />
                    <Headline
                        className="headline--cart"
                        text={t("Shipping.Headline.text")}
                    />
                </div>
                <div className="cart__body">
                    <SwitchButton
                        value={method}
                        setValue={setMethod}
                        type="shipping"
                        button1={t("Shipping.Button.text")}
                        button2={t("Shipping.Button2.text")}
                        caption={[t("Shipping.Button.caption"), itemsPrice < 500 ? t("Shipping.Button2.caption") : t("Shipping.Button2.caption2")]}
                        className="switch--shipping"
                        activeButton={method === 'pickup' ? 0 : 1}
                    />
                </div>
                <div className="cart__footer">
                    <div className="order">
                        <div className="form__button">
                            <Link className="button--order" to="/order/">
                                {t("Shipping.Button3.text")}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Shipping
