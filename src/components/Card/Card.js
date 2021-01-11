import React, { useRef, useState } from 'react'
import { useTranslation } from "react-i18next"

import SwitchButton from '../SwitchButton/SwitchButton'

import useOnScreen from "../../Hooks/useOnScreen/useOnScreen"

import hotIcon from './images/hot.svg'

import './Card.scss'

const Card = ({ name, description, information, type, image, variants, className, switchMenu, specificity, onAdded }) => {

    const [switchPrice, setSwitchPrice] = useState(variants[0].price)
    const [switchData, setSwitchData] = useState(variants[0])
    const { t } = useTranslation()

    const handleCardAdded = () => {
        const data = {
            name,
            description,
            information,
            type,
            specificity,
            price: switchPrice,
            id: switchData.id,
            size: switchData.size ? switchData.size : switchData.count
        }

        onAdded(data)
    }

    const card = useRef()
    const onScreen = useOnScreen(card, "-150px")

    return (
        <div className={`card ${className}`} data-id={switchData.id}
             ref={card}
             style={{
                 transform: onScreen ? "translateY(-10px)" : "translateY(10px)"
             }}
        >
            <div className="card__header">
                <img src={image} alt="card" className="card__image"/>
            </div>
            <div className="card__body">
                <div className="card__body-title">
                    {t(`Main.Card.Title.${name}`)}
                    {
                        specificity
                        ? specificity.map((item, index) => {
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
                {
                    description
                    ? <div className="card__body-caption">
                        {t(`Main.Card.Description.${description}`)}
                    </div>
                    : null
                }
                {
                    information || variants[0].count || switchMenu
                    ? <div className="card__body-information">
                        {
                            information
                            ? <span>{information}</span>
                            : null
                        }
                        {
                            variants[0].count
                            ? <span>{t(`Main.Card.Count.${variants[0].count}`)}</span>
                            : null
                        }
                        {
                            switchMenu
                            ? <SwitchButton
                                value={variants}
                                setValue={{
                                    setSwitchPrice: setSwitchPrice,
                                    setSwitchId: setSwitchData
                                }}
                                type="price"
                                button1="32 cm"
                                button2="40 cm"
                                className="switch--card"
                                activeButton={switchPrice === variants[0].price ? 0 : 1}
                            />
                            : null
                        }
                    </div>
                    : null
                }
            </div>
            <div className="card__footer">
                {
                    switchMenu
                    ? <span>{switchPrice} {t(`Main.Card.Price.unit`)}</span>
                    : <span>{variants[0].price} {t(`Main.Card.Price.unit`)}</span>
                }
                <button
                    className="button--card"
                    onClick={handleCardAdded}
                >
                    {t(`Main.Card.Button.text`)}
                </button>
            </div>
        </div>
    )
}

export default Card
