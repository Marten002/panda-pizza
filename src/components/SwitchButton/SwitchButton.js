import React, { useState } from 'react'

import './SwitchButton.scss'

const SwitchButton = ({ value, setValue, className, type, button1, button2, caption, activeButton, disable }) => {

    const [switchButton, setSwitchButton] = useState(activeButton)

    const handleChangePrice = (event) => {

        const setValuePrice = setValue.setSwitchPrice
        const setValueId = setValue.setSwitchId

        switch (event) {
            case 0: return (
                setValuePrice(value[0].price),
                    setValueId(value[0])
            )
            case 1: return (
                setValuePrice(value[1].price),
                    setValueId(value[1])
            )
            default:
                return true
        }
    }

    const handleChangePayment = (event) => {

        return setValue(event)

    }

    const handleChangeDelivery = (event) => {

        return setValue(event)

    }

    return (
        <div className={`switch ${className}`}>
            {
                disable !== 1
                    ? <button
                        type="button"
                        className={`switch__button ${switchButton === 0 ? 'switch__button--active' : ''}`}
                        onClick={ () => {
                            setSwitchButton(0)
                            if (type === 'price') {handleChangePrice(0)}
                            else if (type === 'order') {handleChangePayment('cash')}
                            else if (type === 'shipping') {handleChangeDelivery('pickup')}
                        }}
                    >
                        {button1}
                        {
                            caption
                                ? <span>{caption[0]}</span>
                                : null
                        }
                    </button>
                    : null
            }
            {
                disable !== 2
                    ? <button
                        type="button"
                        className={`switch__button ${switchButton === 1 ? 'switch__button--active' : ''}`}
                        onClick={ () => {
                            setSwitchButton(1)
                            if (type === 'price') {handleChangePrice(1)}
                            else if (type === 'order') {handleChangePayment('card')}
                            else if (type === 'shipping') {handleChangeDelivery('courier')}
                        }}
                    >
                        {button2}
                        {
                            caption
                                ? <span>{caption[1]}</span>
                                : null
                        }
                    </button>
                    : null
            }
        </div>
    )
}

export default SwitchButton
