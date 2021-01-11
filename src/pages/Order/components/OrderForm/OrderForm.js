import React from 'react'
import Input from '../../../../components/Input/Input'

import visa from './images/LogoVisa.svg'
import masterCard from './images/LogoMaster.svg'

import './OrderForm.scss'

const OrderForm = () => {

    return (
        <div className="order checkout">
            <form className="form form--checkout">
                <Input 
                    className="form__item--card form__item--image"
                    id="form__cardNumber"
                    type="text"
                    placeholder="4532 3245 3225 5421"
                    name="card"
                    label="Card number"
                    withImage={true}
                    images={[visa, masterCard]}
                />
                <Input 
                    className="form__item--card"
                    id="form__cardHolder"
                    type="text"
                    placeholder="IVAN IVANOV"
                    name="card"
                    label="Holder Name"
                />
                <div className="checkout__container">
                    <Input 
                        className="form__item--least"
                        id="form__cardExp"
                        type="text"
                        placeholder="12/23"
                        name="card"
                        label="Expiration day"
                    />
                    <Input 
                        className="form__item--least"
                        id="form__cardSvv"
                        type="text"
                        placeholder="***"
                        name="card"
                        label="CVC/CVV"
                    />
                </div>
                <div className="form__button">
                    <button 
                        type="submit"
                        className="button--pay"
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                    >
                        Pay
                    </button>
                </div>
            </form>
        </div>
    )
}

export default OrderForm
