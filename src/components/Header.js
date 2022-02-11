import React from "react"
import Svg from "../assets/icon-sun.svg"
const Header = () => {
    return (
        <div className="container py-7 header flex justify-between">
            <h1 className="text-2xl">devfinder</h1>
             <button className="theme-toggle flex items-center">
                 <span className="text-sm tracking-[4px] pr-2">LIGHT</span>
                 <img src={Svg} alt={"sun-icon"}/>
             </button>
        </div>
    )
}

export default Header