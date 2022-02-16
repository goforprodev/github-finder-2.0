import React from "react"


const Card = ({cardColor, children}) => {

    return(
        <div className={`bg-card container rounded-lg mb-6 `}>
            {children}
        </div>
    )
}

export default Card