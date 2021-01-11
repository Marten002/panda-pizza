
/* Example Get: useLocalStorage('get', 'alert') */
/* Example Set: useLocalStorage('set', 'alert', true) */
/* Example Remove: useLocalStorage('remove', 'alert') */

import { useState } from 'react'

const useLocalStorage = (handle, key, value) => {

    const [storageValue, setStorageValue] = useState(value)

    const setValue = (value) => {

        localStorage.setItem(key, JSON.stringify(value))
        setStorageValue(value)

    }

    const getValue = (key) => {

        return localStorage.getItem(key)

    }

    const removeValue = (key) => {

        return localStorage.removeItem(key)

    }

    switch (handle) {
        case 'get':
            return {
                name: key,
                value: getValue(key)
            }

        case 'set':
            return [storageValue, setValue]

        case 'remove':
            return removeValue(key)

        default:
            return false
    }

}

export default useLocalStorage
