import React, { useMemo, useReducer } from 'react'
import Navbar from "./Navbar"
import Bardisplay from "./Bardisplay"
import OptionsContext from "../contexts/OptionsContext"
import optionsReducer from '../reducers/optionsReducer'

const App = () => {
    // Initialize options 
    const [state, dispatch] = useReducer(optionsReducer, { size: 10, speed: 0.5 })
    const optionsContextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

    console.log(state)
    return (
        <OptionsContext.Provider value={optionsContextValue}>
            <Navbar />
            <Bardisplay />
        </OptionsContext.Provider>
    )
}

export default App