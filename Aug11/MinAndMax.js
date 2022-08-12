
// Write a function midrange, that calculates the midrange of 3 numbers. 
// The midrange is the mean of the smallest and largest number.

function midrange(a, b, c) {

    let min = Math.min(a, b, c)
    let max = Math.max(a, b, c)

    return  (min + max) / 2

}
