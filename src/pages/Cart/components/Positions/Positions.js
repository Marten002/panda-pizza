import React from 'react'
import { useTranslation } from "react-i18next"

import CountButton from '../../../../components/CountButton/CountButton'

import hotIcon from "./images/hot.svg"

import './Positions.scss'

const Positions = ({ items }) => {

    const { t } = useTranslation()

    return (
        <>
            {
                Object.values(items).map((item, index) => {
                    if (item.totalPrice === true) {
                        return false
                    } else {
                        return (
                            <div key={index} className="positions">
                                <div className="positions__item positions__item--title">
                                    {
                                        t(`Main.Card.Title.${item.items[0].name}`)
                                    }
                                    {
                                        item.items[0].type === 'pizza' ? ` ${item.items[0].size}"` : ''
                                    }
                                    {
                                        item.items[0].specificity
                                            ? item.items[0].specificity.map((item, index) => {
                                                switch (item) {
                                                    case 'hot':
                                                        return (
                                                            <img
                                                                key={index}
                                                                src={hotIcon}
                                                                alt={item}
                                                                style={{marginLeft: 5}}
                                                            />
                                                        )
                                                    case 'other':
                                                        return null

                                                    default:
                                                        return true
                                                }
                                            })
                                            : null
                                    }
                                </div>
                                <div className="positions__item positions__item--information">
                                    {
                                        item.items[0].description
                                            ? t(`Main.Card.Description.${item.items[0].description}`)
                                            : t(`Main.Card.Count.${item.items[0].size}`)
                                    }
                                </div>
                                <div className="positions__item positions__item--counter">
                                    <CountButton
                                        item={item.items}
                                    />
                                </div>
                                <div className="positions__item positions__item--price">
                                    {item.totalPrice} {t("Main.Card.Price.unit")}
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Positions
