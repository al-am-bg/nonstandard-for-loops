function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let odd = [];
    for (i = 1; i < arr.length; i += 2) odd.push(arr[i]);
    return odd;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddReverse = [];
    let lastIndex = arr.length - 1;
    if (lastIndex % 2 == 0) lastIndex -= 1;
    for (let i = lastIndex; i > 0; i -= 2) {
        oddReverse.push(arr[i]);
    }
    return oddReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let secondPower = [];
    for (let i = 1; i < arr.length; i *= 2) secondPower.push(arr[i]);
    return secondPower;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let nthPower = [];
    for (let i = 1; i < arr.length; i *= n) nthPower.push(arr[i]);
    return nthPower;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalf = [];
    let half = (arr.length) / 2;
    for (let i = 0; i < half; i++) firstHalf.push(arr[i]);
    return firstHalf; 
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secondHalf = [];
    let half = arr.length / 2;
    for (let i = arr.length - 1; i > secondHalf; i--) secondHalf.push(arr[i]);
    return secondHalf;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}