import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import arrow from './images/arrow.svg'

import './CartLink.scss'

const CartLink = ({ className, path, image, text, type }) => {

    const history = useHistory()

    const handleRenderLink = () => {
        if (type === 'link') {
            return (
                <Link to={path}>
                    {
                        image
                        ? <img src={arrow} alt="back"/>
                        : null
                    }
                    {text}
                </Link>
            )
        } else if (type === 'function') {
            return (
                <span onClick={history.goBack}>
                    {
                        image
                        ? <img src={arrow} alt="back"/>
                        : null
                    }
                    {text}
                </span>
            )
        }
    }

    return (
        <div className={`cart__link ${className ? className : ''}`}>
            {
                handleRenderLink()
            }
        </div>
    )
}

export default CartLink
