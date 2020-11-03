import React, { useContext, useEffect, useState } from "react"
import { SORT } from "../actions"
import bubblesort from "../algorithms/bubblesort"
import OptionsContext from "../contexts/OptionsContext"
import "./SortingVisualizer.css"

const SortingVisualizer = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [originalArray, setOriginalArray] = useState([])
    const [arraysAfterSortSteps, setArraysAfterSortSteps] = useState([])

    // create shuffled array
    useEffect(() => {
        // const MAX_NUMBER = state.size * 2
        let randomNumbers = []

        for (let i = 0; i < state.size; i++) {
            randomNumbers.push(state.size - i)
        }

        dispatch({ type: SORT, payload: null })
        setOriginalArray([...randomNumbers])
    }, [state.size, dispatch])

    // sort the array
    useEffect(() => {
        if(state.sortAlgo === null) return

        let arrays = bubblesort(originalArray)
        setArraysAfterSortSteps(arrays)
    }, [state.sortAlgo, originalArray])

    return (
        < div className="bar-container" >
            { originalArray.map(el => <div key={el.toString()} className="bar" style={{ height: (el * 10) + "px" }}>{el}</div>)}
        </div>
    )
}

export default SortingVisualizer