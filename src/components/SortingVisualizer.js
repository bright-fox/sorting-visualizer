import React, { useContext, useEffect, useState } from "react"
import { SORT } from "../actions"
import bubblesort from "../algorithms/bubblesort"
import OptionsContext from "../contexts/OptionsContext"
import "./SortingVisualizer.css"
import { shuffleArray, sleep, changeBarColors } from "../utils"

const SortingVisualizer = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [array, setArray] = useState([])
    const [animations, setAnimations] = useState([])
    const [start, setStart] = useState(false)
    const [index, setIndex] = useState(0)

    // create shuffled array
    useEffect(() => {
        let randomNumbers = []

        for (let i = 0; i < state.size; i++) {
            randomNumbers.push(i)
        }

        shuffleArray(randomNumbers)
        dispatch({ type: SORT, payload: null })
        setArray(randomNumbers)
    }, [state.size, dispatch])

    // create the animation steps for the sorting algorithm
    useEffect(() => {
        if (state.sortAlgo === null) return
        setAnimations(bubblesort([...array]))
    }, [state.sortAlgo, array])

    // start the sorting animation
    useEffect(() => {
        const colorBars = async () => {
            if (!start) return
            if (index >= animations.length - 1) {
                setStart(false)
                return setIndex(0)
            }

            let temp
            const animation = animations[index]
            const displayedBars = document.querySelectorAll(".bar")

            // color change for displaying comparison between two values
            changeBarColors(displayedBars, animation.comparison, "green")
            await sleep(200)

            if (!animation.swap) {
                // change color back to the original color
                changeBarColors(displayedBars, animation.comparison, "blue")
            } else {
                // color change to indicate swap of two values
                changeBarColors(displayedBars, animation.swap, "red")
                await sleep(200)

                // change color back to the original color
                changeBarColors(displayedBars, animation.swap, "blue")

                // make the actual changes in the array
                temp = array[animation.swap[0]]
                array[animation.swap[0]] = array[animation.swap[1]]
                array[animation.swap[1]] = temp
            }

            // increment the index of the animations array for the next animation
            setIndex(prevIndex => prevIndex + 1)
        }
        colorBars()
    }, [start, index, animations, array])

    // Start button handler
    const handleStart = () => {
        if (state.sortAlgo === null) return
        setStart(prevState => !prevState)
    }

    return (
        <>
            < div className="bar-container" >
                {array.map(el => <div key={el.toString()} className="bar" style={{ height: (el * 10) + "px" }}>{el}</div>)}
            </div>
            <button onClick={handleStart}>{start ? "Stop" : "Start"}</button>
        </>
    )
}

export default SortingVisualizer