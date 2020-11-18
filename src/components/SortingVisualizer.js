import React, { useContext, useEffect, useState } from "react"
import { SORT, STOP } from "../actions"
import bubblesort from "../algorithms/bubblesort"
import OptionsContext from "../contexts/OptionsContext"
import { shuffleArray, sleep, changeBarColors, calculateHeight } from "../utils"
import { COMPARE_COLOR, DEFAULT_SLEEP_DELAY, NORMAL_COLOR, SWAP_COLOR } from "../variables"
import Controls from "./Controls"

import "./SortingVisualizer.css"

const SortingVisualizer = () => {
    const { state, dispatch } = useContext(OptionsContext)
    const [array, setArray] = useState([])
    const [animations, setAnimations] = useState([])
    const [index, setIndex] = useState(0)

    // create shuffled array
    useEffect(() => {
        let randomNumbers = []

        for (let i = 1; i <= state.size; i++) {
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
            if (!state.start) return
            if (index >= animations.length - 1) {
                dispatch({ type: STOP })
                return setIndex(0)
            }

            let temp
            const animation = animations[index]
            const displayedBars = document.querySelectorAll(".bar")

            // color change for displaying comparison between two values
            changeBarColors(displayedBars, animation.comparison, COMPARE_COLOR)

            await sleep(Math.floor(DEFAULT_SLEEP_DELAY / state.speed))

            if (!animation.swap) {
                // change color back to the original color
                changeBarColors(displayedBars, animation.comparison, NORMAL_COLOR)
            } else {
                // color change to indicate swap of two values
                changeBarColors(displayedBars, animation.swap, SWAP_COLOR)
                
                await sleep(Math.floor(DEFAULT_SLEEP_DELAY / state.speed))

                // change color back to the original color
                changeBarColors(displayedBars, animation.swap, NORMAL_COLOR)

                // make the actual changes in the array
                temp = array[animation.swap[0]]
                array[animation.swap[0]] = array[animation.swap[1]]
                array[animation.swap[1]] = temp
            }

            // increment the index of the animations array for the next animation
            setIndex(prevIndex => prevIndex + 1)
        }
        colorBars()
    }, [state.start, index, animations, array, dispatch])

    const renderBars = () => {
        const width = (1 / array.length) * 100

        return array.map(el => {
            const height = calculateHeight(el, array.length - 1)
            return <div key={el.toString()} className="bar" style={{ height: `${height}%`, width: `${width}%` }}>{array.length < 30 ? el : ""}</div>
        })
    }

    return (
        <>
            <div className="legend-container">
                <div className="color-container">
                    <div className="color-box" style={{ backgroundColor: COMPARE_COLOR }} />
                    <div>Comparison</div>
                </div>

                <div className="color-container">
                    <div className="color-box" style={{ backgroundColor: SWAP_COLOR }} />
                    <div>Swap</div>
                </div>
            </div>
            < div className="bar-container" >
                {renderBars()}
            </div>
            <Controls />
        </>
    )
}

export default SortingVisualizer