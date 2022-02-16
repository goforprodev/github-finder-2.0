import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import UserDetails from "../components/UserDetails";

//TODO: `try passing state using reducers and context api`
function App() {

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
