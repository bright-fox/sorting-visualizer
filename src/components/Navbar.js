import React, { useContext, useState } from 'react'
import { SIZE, SORT } from '../actions'
import OptionsContext from '../contexts/OptionsContext'
import { BUBBLE_SORT, INSERTION_SORT, QUICK_SORT, SELECTION_SORT } from '../variables'
import Dropdown from './Dropdown'
import "./Navbar.css"

const Navbar = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [speed, setSpeed] = useState(0.5)

    const handleAlgorithmDropdown = value => {
        dispatch({ type: SORT, payload: value})
    }

    const handleSizeDropdown = value => {
        dispatch({ type: SIZE, payload: parseInt(value)})
    }

    return (
        <div className="navbar">
            <div className="left-menu">
                <div className="navbrand">Sorting Visualizer</div>
                <div className="slider-container">
                    <div className="slider-name">Speed</div>
                    <div className="slider">
                        <div className="slider-label">Fast</div>
                        <input type="range" min="0" max="1" step="0.2" value={speed} onChange={e => setSpeed(e.target.value)} />
                        <div className="slider-label">Slow</div>
                    </div>
                </div>
            </div>

            <Dropdown defaultValue="Select algorithm" value={state.sortAlgo} values={[BUBBLE_SORT, QUICK_SORT, SELECTION_SORT, INSERTION_SORT]} handleOptionSelection={handleAlgorithmDropdown}/>
            <Dropdown value={state.size} values={[10, 25, 50]} handleOptionSelection={handleSizeDropdown} />
        </div>
    )
}

export default Navbar