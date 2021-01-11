import { useState, useEffect } from 'react'

const useOnScreen = (ref, rootMargin = '0px') => {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin
            }
        )
        const current = ref.current

        if (current) {
            observer.observe(current)
        }
        return () => {
            observer.unobserve(current)
        }
    }, [rootMargin, ref])

    return isIntersecting
}

export default useOnScreen
