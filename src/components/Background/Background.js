import React, { useEffect, useState } from 'react'

const Background = ({ image, alt, className, withAnimation }) => {

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            window.pageYOffset < 870 ? setOffset(window.pageYOffset) : setOffset(870)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <img src={image}
             alt={alt}
             className={className}
             style={withAnimation ? {transform: `translateY(${offset < 10 ? offset * .5 : offset * .2}px)`} : null}
        />
    )
}

export default Background
