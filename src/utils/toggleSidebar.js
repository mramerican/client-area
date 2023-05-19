const StorageKey = 'toggleState'
export const setVisible = (state) => localStorage.setItem(StorageKey, `${Number(state)}`)
export const getVisible = () => !!Number(localStorage.getItem(StorageKey))