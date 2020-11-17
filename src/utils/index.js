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
 * 
 * @param {*} bars Reference to the displayed HTML bars 
 * @param {*} indices indices of the bars
 * @param {*} backgroundColor 
 */
export const changeBarColors = (bars, indices, backgroundColor) => {
    for(let i of indices) {
        bars[i].style.backgroundColor = backgroundColor
    }
}