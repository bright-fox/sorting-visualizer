import { swap } from "../utils"

const bubblesort = arr => {
    let animations = []

    for(let n = arr.length; n > 1; n--) {
        for(let i = 0; i < n - 1; i++) {
            // compare value of i and i + 1
            animations.push({ compare: [i, i + 1]})

            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)

                // swap values of i and i + 1
                animations.push({ swap: [i, i + 1]})
            }
        }
    }
    return animations
}

export default bubblesort