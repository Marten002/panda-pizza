import React from 'react'
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"

import CartLink from '../../components/CartLink/CartLink'
import Headline from '../../components/Headline/Headline'
import Positions from './components/Positions/Positions'
import Background from "../../components/Background/Background"

import backgroundImage from './images/backgroundImage.svg'

import './Cart.scss'

const Cart = () => {

    const { items, itemsPrice, itemsCount } = useSelector(({ cart }) => {
        return {
            items: cart.items,
            itemsPrice: cart.itemsPrice,
            itemsCount: cart.itemsCount
        }
    })

    const { t } = useTranslation()

    return (
        <>
            <Background
                image={backgroundImage}
                alt="background-home"
                className="app__background"
                withAnimation={false}
            />
            <main className="cart">
                <div className={`cart__header ${itemsCount === 0 ? 'cart__header--empty' : ''}`}>
                    <CartLink
                        className="cart__link--back"
                        type="function"
                        image={true}
                        text={t("Cart.CartLink.text")}
                    />
                    <Headline
                        className={`headline--cart ${itemsCount === 0 ? 'headline--cart-empty' : ''}`}
                        text={itemsCount === 0 ? t("Cart.Headline2.text") : t("Cart.Headline.text")}
                    />
                    {
                        itemsCount === 0
                        ? <div className="cart__description">
                            {t("Cart.Description.text")}
                        </div>
                        : null
                    }
                </div>
                {
                    itemsCount !== 0
                    ? <div className="cart__body">
                        <Positions
                            items={items}
                        />
                        <div className="positions positions--total">
                            <div className="total">
                                <div className="total__item">
                                    {t("Cart.Table.Total.text")}:
                                </div>
                                <div className="total__item">
                                    {itemsPrice} {t("Main.Card.Price.unit")}
                                </div>
                            </div>
                            <div className="positions__order">
                                <Link className="positions__link" to="/shipping/">
                                    {t("Cart.Table.Order.text")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    : null
                }
            </main>
        </>
    )
}

export default Cart
