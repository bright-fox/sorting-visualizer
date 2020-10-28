import React, { useContext, useEffect, useState } from "react"
import OptionsContext from "../contexts/OptionsContext"
import "./Bardisplay.css"

const Bardisplay = () => {
    const { state } = useContext(OptionsContext)
    const [array, setArray] = useState([])

    useEffect(() => {
        const MAX_NUMBER = state.size * 2
        let randomNumbers = []

        for (let i = 0; i < state.size; i++) {
            randomNumbers.push(Math.floor((Math.random() * MAX_NUMBER) + 1))
        }
        setArray(randomNumbers)
    }, [state.size])

    return (
        <div className="bar-container">
            {array.map((el, i) => {
                return (
                    <div key={i} className="bar" style={{ height: (el * 10) + "px" }} />
                )
            })}
        </div>
    )
}

export default Bardisplay