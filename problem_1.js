// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

const list = [9, 9, 1, 1]
const k = 18
let complete = false

for ( let i = 0 ; i < list.length ; i++ ) {
    if ( complete ) break
    for ( let j = 0 ; j < list.length ; j++ ) {
        if ( j == i ) continue
        if ( list[i] + list[j] == k ) {
            complete = true
            console.log('Two numbers in the array (', list[i], 'and', list[j], ') add up to k (', k, ')')
            break
        }
    }
}

if ( !complete ) console.log( 'No two numbers in the array added up to k.')