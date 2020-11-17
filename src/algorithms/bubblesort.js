const bubblesort = arr => {
    let temp
    let animations = []

    for(let n = arr.length; n > 1; n--) {
        for(let i = 0; i < n - 1; i++) {
            let animation = {}

            // compare value of i and i + 1
            animation.comparison = [i, i + 1]

            if(arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp

                // swap values of i and i + 1
                animation.swap = [i, i + 1]
            }

            animations.push(animation)
        }
    }
    return animations
}

export default bubblesort