import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserDetails from "../components/UserDetails";

function App() {
    const [user , setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async (user = "octocat") => {
            const url = "https://api.github.com/users"
            const response = await fetch(`${url}/${user}`)
            const data = await response.json()
            setUser(data)
            setLoading(false)
            // console.log(data)
        }
        fetchUsers()
    },[])
  return (
    <div className="App bg-dark-blue h-screen text-white flex items-center content-center">
        <div className="container mx-auto max-w-3xl px-3">
            <Header />
            <SearchBar />
            <UserDetails />
        </div>

    </div>
  );
}

export default App;
