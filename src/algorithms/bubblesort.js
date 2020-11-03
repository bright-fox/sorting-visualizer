const bubblesort = arr => {
    let temp
    let arraysAfterSortSteps = []

    for(let n = arr.length; n > 1; n--) {
        for(let i = 0; i < n - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                // save that step after that sort step
                arraysAfterSortSteps.push([...arr])
            }
        }
    }
    return arraysAfterSortSteps
}

export default bubblesort