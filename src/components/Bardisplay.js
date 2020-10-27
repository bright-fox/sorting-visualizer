import React, { useState } from "react"
import "./Bardisplay.css"

const Bardisplay = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5])


    return (
        <div className="bar-container">
            {array.map(el => {
                return (
                    <div className="bar" style={{ height: (el * 20) + "px" }} />
                )
            })}
        </div>
    )
}

export default Bardisplay