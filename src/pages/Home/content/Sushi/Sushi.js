import React from 'react'
import Card from '../../../../components/Card/Card'
import Preloader from "../../../../components/Preloader/Preloader"

import image11 from './images/0.jpg'
import image12 from './images/1.jpg'
import image13 from './images/2.jpg'
import image14 from './images/3.jpg'
import image15 from './images/4.jpg'
import image16 from './images/5.jpg'
import image17 from './images/6.jpg'
import image18 from './images/7.jpg'
import image19 from './images/8.jpg'
import image20 from './images/9.jpg'
import image21 from './images/10.jpg'
import image22 from './images/11.jpg'

const images = [
    image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22
]

const Sushi = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--sushi">
            {items.map((props, index) => (
                items[index].type === 'sushi'
                    ? <Card
                        key={index}
                        className="sushi"
                        image={images[items[index].img]}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Sushi
