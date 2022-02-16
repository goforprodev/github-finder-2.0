import React,{useReducer,createContext} from "react"
import userContextReducer from "./userContextReducer"


const initalState = {};

export const UserContext = createContext(initalState)


const Provider = ({children}) => {

    const [user,dispatch] = useReducer(userContextReducer,initalState)
    const fetchSingleUser = (user) => dispatch({type:"BRING_SINGLE", payload:user})

    return(
        <UserContext.Provider value={{fetchSingleUser,user}}>
            {children}
        </UserContext.Provider>
    )

}

export default Provider