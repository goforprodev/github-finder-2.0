import React,{useReducer,useEffect} from 'react';
import './App.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserDetails from "../components/UserDetails";


const initialState = {
    error:'',
    isLoading:true,
    userData:{}
}

export const reducer = (state,action) => {
    switch(action.type) {
        case 'success':
            return {...state,isLoading:false,userData:action.payload,error:''}
        case 'error':
            return {...state,isLoading:false,error:'No results'}
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
            if(response.status === 200 && user !== ''){
                dispatch({type:'success',payload:data})
            }else{
                dispatch({type: 'error', payload: ''})
            }
    }
    useEffect( async () => {
        await fetchUsers('octocat')
    },[])
    const {isLoading,userData,error} = state
  if(isLoading){
      return (<p>Loading...</p>)
  }
  return (
    <div className="App bg-dark-blue h-screen text-white flex items-center content-center">
        <div className="container mx-auto max-w-3xl px-3">
            <Header />
            <SearchBar fetchUsers={fetchUsers} err={error} />
            <UserDetails userData={userData} />
        </div>

    </div>
  );
}

export default App;
