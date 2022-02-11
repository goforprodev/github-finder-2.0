import React from "react"

const Links = ({svg,name}) => {
    return(
        <div className={"flex"}>
            <img src={svg} alt={name} className={`${name ? null:'opacity-30'}`}/>
            <p className={`px-2 text-sm ${name ? 'text-white' : 'text-medium-purple'}`}>{name ?? 'Not Available'}</p>
        </div>
    )
}

export default Links