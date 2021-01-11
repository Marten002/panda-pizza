import React from 'react'
import Card from '../../../../components/Card/Card'
import Preloader from "../../../../components/Preloader/Preloader"

import image0 from './images/0.jpg'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'

const images = [image0, image1, image2, image3, image4]

const Other = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--other">
            {items.map((props, index) => (
                items[index].type === 'other'
                    ? <Card
                        key={index}
                        className="other"
                        image={images[items[index].img]}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Other
