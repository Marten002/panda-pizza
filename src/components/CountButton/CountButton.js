import React from 'react'
import { useDispatch } from "react-redux"

/* Actions */
import { handleAddCard, handleRemoveCard } from "../../Redux/actions/cart"
/* Actions */

import './CountButton.scss'

const CountButton = ({ item }) => {

    const dispatch = useDispatch()

    const handleCardAdded = () => {

        const data = {
            name: item[0].name,
            description: item[0].description,
            information: item[0].information,
            type: item[0].type,
            price: item[0].price,
            id: item[0].id,
            size: item[0].size ? item[0].size : item[0].count
        }

        dispatch(handleAddCard(data))
    }

    const handleCardRemoved = () => {
        dispatch(handleRemoveCard(item[0].id))
    }

    return (
        <div className="counter">
            <div className="counter__button counter__button--inc">
                <button onClick={handleCardRemoved}>
                    -
                </button>
            </div>
            <div className="count">
                <span>{item.length}</span>
            </div>
            <div className="counter__button counter__button--dec">
                <button onClick={handleCardAdded}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CountButton
