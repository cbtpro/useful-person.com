export const setItem = (key: string, value: string | Object, expired?: number) => {
    let newStorage
    try {
        const oldStorage = JSON.parse(getItem(key) || '{}')
        if (typeof value === 'object') {
            newStorage = { value, ...oldStorage, expired }
        } else {
            newStorage = { value, expired }
        }
        window.localStorage.setItem(key, JSON.stringify(newStorage))
    } catch (error) {
        console.log(error)
    }
}
export const getItem = (key: string) => {
    const storage = window.localStorage.getItem(key) || '{}'
    const { value, expired } = JSON.parse(storage)
    if (!expired || expired < Date.now()) {
        return value
    }
    return undefined
}