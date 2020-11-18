import React, { useContext, useEffect, useState } from "react"
import { SPEED } from "../actions"
import OptionsContext from "../contexts/OptionsContext"

import "./SpeedControls.css"

const SpeedControls = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [isOpened, setIsOpened] = useState(false)

    // side effect to close the speed controls after clicking somewhere
    useEffect(() => {
        if (!isOpened) return

        const closeSpeedControls = () => {
            setIsOpened(false)
            window.removeEventListener("click", closeSpeedControls)
        }

        window.addEventListener("click", closeSpeedControls)

        return () => window.removeEventListener("click", closeSpeedControls)
    }, [isOpened])

    // change speed variable in context to the selected one
    const handleSpeedChange = e => {
        dispatch({ type: SPEED, payload: parseInt(e.target.textContent) })
    }

    return (
        <div className="speed-control-menu">
            <div className="speed-control-heading" onClick={() => setIsOpened(prev => !prev)}>
                {state.speed}x
                </div>
            <div className={`speed-control-options ${!isOpened ? "hidden" : ""}`}>
                <div className="speed-control-option" onClick={handleSpeedChange}>1x</div>
                <div className="speed-control-option" onClick={handleSpeedChange}>2x</div>
                <div className="speed-control-option" onClick={handleSpeedChange}>3x</div>
                <div className="speed-control-option" onClick={handleSpeedChange}>4x</div>
            </div>
        </div>
    )
}

export default SpeedControls