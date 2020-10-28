import React, { useContext, useState } from 'react'
import { SIZE } from '../actions'
import OptionsContext from '../contexts/OptionsContext'
import "./Navbar.css"

const Navbar = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [speed, setSpeed] = useState(0.5)

    return (
        <div className="navbar">
            <div className="left-menu">
                <div className="navbrand">Sorting Visualizer</div>
                <div className="slider-container">
                    <div className="slider-name">Size</div>
                    <div className="slider">
                        <div className="slider-label">Small</div>
                        <input type="range" min="3" max="20" value={state.size} onChange={e => dispatch({ type: SIZE, payload: Number(e.target.value) })} />
                        <div className="slider-label">Big</div>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-name">Speed</div>
                    <div className="slider">
                        <div className="slider-label">Fast</div>
                        <input type="range" min="0" max="1" step="0.2" value={speed} onChange={e => setSpeed(e.target.value)} />
                        <div className="slider-label">Slow</div>
                    </div>
                </div>
            </div>

            <div className="right-menu">
                <div className="pointer">Bubble Sort</div>
                <div className="pointer">Quick Sort</div>
                <div className="pointer">Selection Sort</div>
                <div className="pointer">Insertion Sort</div>
            </div>
        </div>
    )
}

export default Navbar