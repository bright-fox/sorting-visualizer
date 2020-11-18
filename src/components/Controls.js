import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

import OptionsContext from '../contexts/OptionsContext';
import { START, STOP } from '../actions';
import SpeedControls from "./SpeedControls"

import "./Controls.css"

const Controls = ({ setStart }) => {
    const { state, dispatch } = useContext(OptionsContext)

    // play/pause button handler
    const handleStart = () => {
        if (state.sortAlgo === null) return

        dispatch({ type: state.start ? STOP : START })
    }

    return (
        <div className="controls">
            <button onClick={handleStart} className="play-button">
                <FontAwesomeIcon icon={state.start ? faPause : faPlay} />
            </button>
            <SpeedControls />
        </div>
    )
}

export default Controls