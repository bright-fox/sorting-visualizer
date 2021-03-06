/**
 * Sleep for certain amount of time
 * @param {Number} m An amount of time in milliseconds
 */

export const sleep = m => new Promise(r => setTimeout(r, m))

/**
* Shuffles array in place. ES6 version
* @param {Array} a items An array containing the items.
*/
export function shuffleArray(a) {
   for (let i = a.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [a[i], a[j]] = [a[j], a[i]];
   }
   return a;
}

/**
 * Changes the colors of the bars
 * @param {Element} bars Reference to the displayed HTML bars 
 * @param {Array} indices indices of the bars
 * @param {String} backgroundColor 
 */
export const changeBarColors = (bars, indices, backgroundColor) => {
    for(let i of indices) {
        bars[i].style.backgroundColor = backgroundColor
    }
}

/**
 * Calculates the heights for the bars
 * @param {Number} val Number
 * @param {Number} max Maximum number
 */
export const calculateHeight = (val, max) => {
    return (val / (max + 1)) * 100
}

/**
 * Swap two values in an array based on two indices
 * @param {Array} arr Array of numbers
 * @param {Number} indexOne First index
 * @param {Number} indexTwo Second index
 */
export const swap = (arr, indexOne, indexTwo) => {
    let temp

    temp = arr[indexOne]
    arr[indexOne] = arr[indexTwo]
    arr[indexTwo] = temp
}