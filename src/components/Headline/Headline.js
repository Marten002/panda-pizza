import React from 'react'

import './Headline.scss'

const Headline = ({ className, text, textCaption}) => {
    return (
        <div className={`headline ${className}`}>
            <span className="headline__text">{text}</span>
            {
                textCaption
                ? <span className="headline__text">{textCaption}</span>
                : null
            }
        </div>
    )
}

export default Headline
