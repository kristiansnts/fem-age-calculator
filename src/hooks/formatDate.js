const getCurrentYear = () => {
    return new Date().getFullYear()
} 

const getMaxDate = (year, month) => {
    return new Date(year, month, 0).getDate()
}

export { getCurrentYear, getMaxDate }