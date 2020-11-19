import React, { useContext, useEffect, useState } from "react"
import { SORT, STOP } from "../actions"
import bubblesort from "../algorithms/bubblesort"
import selectionsort from "../algorithms/selectionsort"
import OptionsContext from "../contexts/OptionsContext"
import { shuffleArray, sleep, changeBarColors, calculateHeight, swap } from "../utils"
import { BUBBLE_SORT, COMPARE_COLOR, DEFAULT_SLEEP_DELAY, NORMAL_COLOR, SELECTION_SORT, SWAP_COLOR } from "../variables"
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
        setArray(randomNumbers)
    }, [state.size, dispatch])

    // create the animation steps for the sorting algorithm
    useEffect(() => {
        // reset index (hacky solution)
        setTimeout(() => setIndex(0), DEFAULT_SLEEP_DELAY)

        switch(state.sortAlgo) {
            case BUBBLE_SORT:
                setAnimations(bubblesort([...array]))
                break
            case SELECTION_SORT:
                setAnimations(selectionsort([...array]))
                break
            default:
                return
        }
    }, [state.sortAlgo, array])

    // start the sorting animation
    useEffect(() => {
        const colorBars = async () => {
            if (!state.start) return
            if (index >= animations.length - 1) {
                dispatch({ type: STOP })
                dispatch({ type: SORT, payload: null})
                setIndex(0)
                return
            }

            const animation = animations[index]
            const animationName = Object.keys(animation)[0]
            const displayedBars = document.querySelectorAll(".bar")

            if(animation.compare) {
                changeBarColors(displayedBars, animation.compare, COMPARE_COLOR)
            }

            if(animation.swap) {
                changeBarColors(displayedBars, animation.swap, SWAP_COLOR)
            }

            await sleep(Math.floor(DEFAULT_SLEEP_DELAY / state.speed))
            changeBarColors(displayedBars, animation[animationName], NORMAL_COLOR)

            if(animation.swap) {
                // make the actual changes in the array
                swap(array, animation.swap[0], animation.swap[1])
            }

            // increment the index of the animations array for the next animation
            setIndex(prevIndex => prevIndex + 1)
        }
        colorBars()
    }, [state.start, index, animations, array, dispatch, state.speed])

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