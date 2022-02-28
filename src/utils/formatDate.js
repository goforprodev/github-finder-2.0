export const formatDate = (date) => {
    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const joined = new Date(date)
    let day = joined.getDate()
    let month =  monthArr[joined.getMonth()]
    let year = joined.getFullYear()
    return `${day} ${month} ${year}`
}
