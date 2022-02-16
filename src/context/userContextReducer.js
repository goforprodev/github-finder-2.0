
const fetchUsers = async (user) => {
    const url = "https://api.github.com/users"
    const response = await fetch(`${url}/${user}`)
    return await response.json()
}
const userContextReducer = (state,action) => {
    switch(action.type){
        case "BRING_USER":
            return fetchUsers(action.payload);
        default:
            return state
    }
}



export default userContextReducer