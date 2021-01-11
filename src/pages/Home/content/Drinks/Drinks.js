import React from 'react'
import Card from '../../../../components/Card/Card'
import Preloader from "../../../../components/Preloader/Preloader"

import image0 from './images/0.jpg'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'
import image5 from './images/5.jpg'
import image6 from './images/6.jpg'
import image7 from './images/7.jpg'
import image8 from './images/8.jpg'

const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8]

const Drinks = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--drink">
            {items.map((props, index) => (
                items[index].type === 'drink'
                    ? <Card
                        key={index}
                        className="drink"
                        image={images[items[index].img]}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Drinks
