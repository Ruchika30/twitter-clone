

export const saveLocalItem: (key: string, value: string) => void = (key: string, value: string) => {
    localStorage.setItem(key, value)
}


export const getLocalItem: (key: string) => string = (key: string) => {
    return localStorage.getItem(key) ?? ''
}