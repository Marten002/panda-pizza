import React from 'react'
import { ErrorMessage } from "react-hook-form"

import './Input.scss'

const Input = ({ register, name, className, label, id, withImage, images, errors, ...props }) => {
    return (
        <div className={`form__item ${className ? className : ''}`}>
            {
                label
                ? <label htmlFor={id}>
                    {label}
                  </label>
                : null
            }
            <input
                id={id}
                name={name}
                ref={register}
                {...props}
            />
            {
                errors
                ? <span>
                    <ErrorMessage errors={errors} name={name}/>
                  </span>
                : null
            }
            {
                withImage
                ? <div className="form__container form__container--images">
                    {
                        images.map( (item, index) => {
                            return (
                                <img key={index} src={images[index]} alt={images[index]} className="form__image"/>
                            )
                        })
                    }
                </div>
                : null
            }
        </div>
    )
}

export default Input
