import React from 'react'
import Card from '../../../../components/Card/Card'
import Preloader from "../../../../components/Preloader/Preloader"

import image0 from './images/0.jpg'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'

const images = [image0, image1, image2]

const Salad = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--salad">
            {items.map((props, index) => (
                items[index].type === 'salad'
                    ? <Card
                        key={index}
                        className="salad"
                        image={images[items[index].img]}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Salad
