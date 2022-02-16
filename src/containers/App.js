import React,{useReducer,useEffect} from 'react';
import './App.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserDetails from "../components/UserDetails";


const initialState = {
    isLoading:true,
    userData:{}
}

export const reducer = (state,action) => {
    switch(action.type) {
        case 'success':
            return {...state,isLoading:false,userData:action.payload}
        case 'fill_user':
            return {...state,searchedUser:action.payload}
        default:
            return state
    }
}
//TODO: `try passing state using reducers and context api`
function App() {
    const [state,dispatch] = useReducer(reducer,initialState)

    const fetchUsers = async (user) => {
        const url = "https://api.github.com/users"
        const response = await fetch(`${url}/${user}`)
        const data = await response.json()
        dispatch({type:'success',payload:data})

    }
    useEffect( async () => {
        await fetchUsers('octocat')
    },[])

    console.log(state)
  return (
    <div className="App bg-dark-blue h-screen text-white flex items-center content-center">
        <div className="container mx-auto max-w-3xl px-3">
            <Header />
            <SearchBar fetchUsers={fetchUsers} />
            <UserDetails userData={state} />
        </div>

    </div>
  );
}

export default App;
