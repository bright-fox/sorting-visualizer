import React, { useMemo, useReducer } from 'react'
import Navbar from "./Navbar"
import SortingVisualizer from "./SortingVisualizer"
import OptionsContext from "../contexts/OptionsContext"
import optionsReducer from '../reducers/optionsReducer'

const App = () => {
    // Initialize options 
    const [state, dispatch] = useReducer(optionsReducer, { size: 10, speed: 0.5, sortAlgo: null })
    const optionsContextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

    console.log(state)
    return (
        <OptionsContext.Provider value={optionsContextValue}>
            <Navbar />
            <SortingVisualizer />
        </OptionsContext.Provider>
    )
}

export default App