import React from 'react'
import { useTranslation } from "react-i18next"

import Headline from '../../components/Headline/Headline'
import CartLink from '../../components/CartLink/CartLink'
import Background from "../../components/Background/Background"

import backgroundImage from "./images/backgroundImage.svg"

import './Resolve.scss'

const Resolve = ({ send }) => {

    const { t } = useTranslation()

    return (
        <>
            <Background
                image={backgroundImage}
                alt="background-home"
                className="app__background"
                withAnimation={false}
            />
            <main className="cart resolve">
                <div className="resolve__header">
                    <CartLink
                        className="cart__link--back"
                        type="link"
                        path="/"
                        image={true}
                        text={t("Resolve.CartLink.text")}
                    />
                </div>
                <div className="resolve__body">
                    <Headline
                        className="headline--resolve"
                        text={!send ? t("Resolve.Headline2.text") : t("Resolve.Headline.text")}
                    />
                    <div className="description">
                        {!send ? t("Resolve.Description2.text") : t("Resolve.Description.text")}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Resolve
