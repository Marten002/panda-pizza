import { _get } from './_get'

export const handleGetItemsCount = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
        return sum + value
    }, 0)
}
