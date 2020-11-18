import React, { useMemo, useReducer } from 'react'
import Navbar from "./Navbar"
import SortingVisualizer from "./SortingVisualizer"
import OptionsContext from "../contexts/OptionsContext"
import optionsReducer from '../reducers/optionsReducer'

const App = () => {
    // Initialize options 
    const [state, dispatch] = useReducer(optionsReducer, { size: 10, speed: 1, sortAlgo: null, start: false })
    const optionsContextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

    return (
        <OptionsContext.Provider value={optionsContextValue}>
            <Navbar />
            <SortingVisualizer />
        </OptionsContext.Provider>
    )
}

export default App