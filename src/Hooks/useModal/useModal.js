import { useState } from 'react'

const useModal = () => {

    const [isShowing, setIsShowing] = useState(false)
    const [useToggle, setUseToggle] = useState(true)

    const toggle = () => {
        if (useToggle) {
            setIsShowing(!isShowing)
        }
        else {
            return null
        }
    }

    return [isShowing, setIsShowing, toggle, setUseToggle]
}

export default useModal
