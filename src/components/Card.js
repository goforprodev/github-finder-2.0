import React from "react"


const Card = ({bg="card", children}) => {
    return(
        <div className={`bg-${bg} container rounded-lg mb-6 `}>
            {children}
        </div>
    )
}

export default Card