import { swap } from '../utils'

/**
 * Sorts the array with selectionsort inplace (min-version)
 * @param {Array} arr 
 */
const selectionsort = arr => {
    let animations = []

    for(let i = 0; i < arr.length - 1; i++) {
        let minPos = i
        let min = Infinity

        for(let j = i; j < arr.length; j++) {
            // lookup the value whether it is smaller than the current min value
            if(arr[j] < min) {
                min = arr[j]
                minPos = j
            }
            animations.push({ compare: [j] })
        }

        if(minPos === i) continue  
        swap(arr, i, minPos)

        animations.push({ swap: [i, minPos]})
    }

    return animations
}

export default selectionsort