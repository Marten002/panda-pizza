import React from 'react'
import ReactDOM from 'react-dom'

import Headline from '../../components/Headline/Headline'

import closeIcon from './images/closeIcon.svg'

import './Modal.scss'

const Modal = ({ isShowing, hide, children, classNameModal, classNameOverlay, title, classNameHeadline }) =>
    isShowing
    ? ReactDOM.createPortal(
        <>
            <div
                className={`overlay ${classNameOverlay}`}
                onClick={hide}
            />
            <div className={`modal ${classNameModal}`}>
                <div className="modal__header">
                    <Headline
                        className={classNameHeadline}
                        text={title}
                    />
                    <img
                        src={closeIcon}
                        alt="close"
                        className="modal__close"
                        onClick={hide}
                    />
                </div>
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </>,
        document.body
    )
    : null

export default Modal
