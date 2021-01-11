import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { Controller, useForm, FormContext } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

/* Actions */
import { handlePaymentMethod } from "../../Redux/actions/payment"
import { handleClientData } from '../../Redux/actions/client'
/* Actions */

import CartLink from '../../components/CartLink/CartLink'
import Headline from '../../components/Headline/Headline'
import Input from '../../components/Input/Input'
import SwitchButton from '../../components/SwitchButton/SwitchButton'
import Preloader from "../../components/Preloader/Preloader"
import Resolve from '../Resolve/Resolve'
import Modal from "../../components/Modal/Modal"
import Background from "../../components/Background/Background"

import useModal from "../../Hooks/useModal/useModal"
import { apiPostOrder } from '../../api/api'
import { ORDER_STATUS } from './utls'

import backgroundImage from "./images/backgroundImage.svg"

import './Order.scss'

const Order = () => {

    const { items, itemsPrice, itemsCount, delivery, payment, client } = useSelector(({ cart, delivery, payment, client }) => {
        return {
            items: cart.items,
            itemsPrice: cart.itemsPrice,
            itemsCount: cart.itemsCount,
            delivery: delivery.method,
            payment: payment.method,
            client: client.data
        }
    })

    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState(payment)
    const [isSend, setIsSend] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [state, setState] = useState({
        name: client.name,
        phone: client.phone,
        address: client.address,
        comment: client.comment,
    })

    const [isShowing, setIsShowing, toggle, setUseToggle] = useModal()
    const { t } = useTranslation()

    useEffect( () => {
        dispatch(handlePaymentMethod(paymentMethod))
    }, [paymentMethod, dispatch])

    useEffect(() => {
        dispatch(handleClientData(state))
    }, [state, dispatch])

    const methods = useForm()

    const defaultValues = {
        name: state.name,
        phone: state.phone,
        address: state.address,
        comment: state.comment
    }

    const { handleSubmit, errors } = methods

    const onSubmit = (data) => {

        // TODO отправлять на бэк только айдишники позиций

        const orderData = {
            items: items,
            itemsPrice: itemsPrice,
            itemsCount: itemsCount,
            delivery: delivery,
            payment: payment,
            client: data,
        }

        console.log(orderData)

        setIsSend(true)

        apiPostOrder(orderData).then(response => {
            if (response === ORDER_STATUS.SUCCESS) {
                setSuccess(true)
            }
        })
        .catch(error => {
            setUseToggle(false)
            toggle()
            setIsShowing(true)

            if (error.response) {
                setError(error.response.data)

                setTimeout(() => {
                    setError('')
                    setIsShowing(false)
                }, 3000)
            }
        })
        .finally(() => setIsSend(false))
    }

    if (!isSend && success) {
        setTimeout(() => window.location.reload(), 3000)

        return <Resolve send={true} />
    }

    const handleModal = () => {
        return (
            <Modal
                isShowing={isShowing}
                hide={toggle}
                classNameModal="modal--order"
                classNameOverlay="overlay--order"
                classNameHeadline="headline--modal"
                title="Error..."
            >
                <span className={`modal__response ${error ? 'modal__response--error' : ''}`}>
                    {
                        error && error
                    }
                </span>
            </Modal>
        )
    }

    return (
        <>
            <Background
                image={backgroundImage}
                alt="background-home"
                className="app__background"
                withAnimation={false}
            />
            <main className="cart order">
                <div className="cart__header">
                    <CartLink
                        className="cart__link--back"
                        type="function"
                        image={true}
                        text={t("Order.CartLink.text")}
                    />
                    <Headline
                        className="headline--order"
                        text={t("Order.Headline.text")}
                    />
                </div>
                <div className="cart__body">
                    {
                        isSend
                        ? <Preloader className="preloader--order"/>
                        : <FormContext {...methods}>
                            <form
                                className="form form--order"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Controller
                                    as={Input}
                                    onInput={(e) => {
                                        setState({
                                            ...state,
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                    id="form__name"
                                    type="text"
                                    name="name"
                                    label={t("Order.Form.Label.name")}
                                    defaultValue={defaultValues.name}
                                    autoComplete="off"
                                    errors={errors}
                                    control={methods.control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This field is required"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "Name must be no more than 100 characters"
                                        }
                                    }}
                                />
                                <Controller
                                    as={Input}
                                    onInput={(e) => {
                                        setState({
                                            ...state,
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                    id="form__phone"
                                    type="text"
                                    name="phone"
                                    label={t("Order.Form.Label.phone")}
                                    defaultValue={defaultValues.phone}
                                    autoComplete="off"
                                    errors={errors}
                                    control={methods.control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "This field is required"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Phone must be at least 5 characters"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Phone must be no more than 20 characters"
                                        }
                                    }}
                                />
                                {
                                    delivery !== 'pickup'
                                    ? <Controller
                                        as={Input}
                                        onInput={(e) => {
                                            setState({
                                                ...state,
                                                [e.target.name]: e.target.value
                                            })
                                        }}
                                        className="form__item--bigger"
                                        id="form__address"
                                        type="text"
                                        name="address"
                                        label={t("Order.Form.Label.address")}
                                        defaultValue={defaultValues.address}
                                        autoComplete="off"
                                        errors={errors}
                                        control={methods.control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "This field is required"
                                            },
                                            maxLength: {
                                                value: 100,
                                                message: "Address must be no more than 100 characters"
                                            }
                                        }}
                                    />
                                    : null
                                }
                                <Controller
                                    as={Input}
                                    onInput={(e) => {
                                        setState({
                                            ...state,
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                    className="form__item--bigger"
                                    id="form__comment"
                                    type="text"
                                    name="comment"
                                    label={t("Order.Form.Label.comment")}
                                    defaultValue={defaultValues.comment}
                                    errors={errors}
                                    autoComplete="off"
                                    control={methods.control}
                                    rules={{
                                        maxLength: {
                                            value: 500,
                                            message: "Comment must be no more than 500 characters"
                                        }
                                    }}
                                />
                                {
                                    delivery === 'courier'
                                    ? <SwitchButton
                                        value={payment}
                                        setValue={setPaymentMethod}
                                        type="order"
                                        button1={t("Order.Button.text")}
                                        button2={t("Order.Button2.text")}
                                        className="switch--order"
                                        activeButton={paymentMethod === 'cash' ? 0 : 1}
                                        disable={2}
                                    />
                                    : null
                                }
                                <div className="form__button">
                                    <button
                                        type="submit"
                                        className="button--order"
                                    >
                                        {t("Order.Button3.text")}
                                    </button>
                                </div>
                            </form>
                        </FormContext>
                    }
                </div>
                {handleModal()}
            </main>
        </>
    )
}

export default Order
