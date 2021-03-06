import React, { useContext } from 'react'
import { SIZE, SORT } from '../actions'
import OptionsContext from '../contexts/OptionsContext'
import { BUBBLE_SORT, INSERTION_SORT, QUICK_SORT, SELECTION_SORT } from '../variables'
import Dropdown from './Dropdown'
import "./Navbar.css"

const Navbar = () => {
    const { state, dispatch } = useContext(OptionsContext)

    const handleAlgorithmDropdown = value => {
        dispatch({ type: SORT, payload: value })
    }

    const handleSizeDropdown = value => {
        dispatch({ type: SIZE, payload: parseInt(value) })
    }

    return (
        <div className="navbar">
            <div className="left-menu">
                <div className="navbrand">Sorting Visualizer</div>
            </div>
            <div className="right-menu">
                <Dropdown defaultValue="Select algorithm" value={state.sortAlgo} values={[BUBBLE_SORT, QUICK_SORT, SELECTION_SORT, INSERTION_SORT]} handleOptionSelection={handleAlgorithmDropdown} />
                <Dropdown label="Size" value={state.size} values={[10, 25, 50]} handleOptionSelection={handleSizeDropdown} />
            </div>
        </div>
    )
}

export default Navbar