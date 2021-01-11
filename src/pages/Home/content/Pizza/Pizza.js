import React from 'react'

import Card from "../../../../components/Card/Card"
import Preloader from "../../../../components/Preloader/Preloader"

import image0 from './images/0.png'
import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import image6 from './images/6.png'
import image7 from './images/7.png'
import image8 from './images/8.png'
import image9 from './images/9.png'
import image10 from './images/10.png'

const images = [
    image0, image1, image2, image2, image3, image4, image5, image6, image7, image8, image9, image10
]

const Pizza = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--pizza">
            {items.map((props, index) => (
                items[index].type === 'pizza'
                    ? <Card
                        key={index}
                        className="pizza"
                        image={images[items[index].img]}
                        switchMenu={true}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Pizza
