import React from "react"
import SearchIcon from "../assets/icon-search.svg"
import Card from "./Card"

const SearchBar = () => {
    return(
        <Card bg={"light-blue"}>
            <div className={"flex justify-between items-center p-2"}>
                <img src={SearchIcon} alt={"search-icon"} className={"px-5"}/>
                <input type="text" placeholder={"Search Github Username..."}
                   className={"bg-transparent text-white placeholder-medium-purple focus:outline-none flex-1"}/>
                <button className={"bg-primary-color rounded-lg py-3 px-5"}>Search</button>
            </div>
        </Card>
    )
}

export default SearchBar