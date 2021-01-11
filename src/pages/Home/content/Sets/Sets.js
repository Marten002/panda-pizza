import React from 'react'
import Card from '../../../../components/Card/Card'
import Preloader from "../../../../components/Preloader/Preloader"

import image0 from './images/0.jpg'
import image1 from './images/1.jpg'

const images = [image0, image1]

const Sets = ({ items, isLoaded, onAdded }) => {

    if (!isLoaded) {
        return <Preloader className="preloader--panel"/>
    }

    return (
        <div className="panel panel--set">
            {items.map((props, index) => (
                items[index].type === 'set'
                    ? <Card
                        key={index}
                        className="set"
                        image={images[items[index].img]}
                        onAdded={onAdded}
                        {...props}
                    />
                    : null
            ))}
        </div>
    )
}

export default Sets
