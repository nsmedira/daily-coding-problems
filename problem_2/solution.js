// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

// I believe this solution runs in O(N^2) time

let integers = [3, 2, 1]
let result = []

for ( let i = 0 ; i < integers.length ; i++ ) {
    let product = null
    for ( let j = 0 ; j < integers.length ; j++ ) {
        if ( j == i ) { 
            continue 
        } else {
            if ( !product ) {
                product = integers[j]
            } else {
                product *= integers[j]
            }
        }
    }
    result.push(product)
}
console.log(result)