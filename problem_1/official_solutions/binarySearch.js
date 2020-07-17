// time complexity for this solution is O(N log N) with O(1) space

console.log(two_sum ( [9,9,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,7,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9], 3))

function two_sum ( list, k ) {
    list.sort()

    for ( let i = 0 ; i < list.length ; i++ ) {
        target = k - list[i]

        console.log(target)

        j = binary_search(list, target)

        console.log(j)

        // check that binary search found the target and that it's not in the same index as i. if it is in the same index, we can check list[i + 1] and list[i - 1] to see if there's another number that's the same value as list[i]
        if (j == -1) {
            continue
        } else if (j !== i) {
            return true
        } else if (j + 1 < list.length && list[j + 1] == target) {
            return true
        } else if (j - 1 >= 0 && list[j - 1] == target) {
            return true
        }
    }

    return false

}

function binary_search(list, target) {
    low = 0
    high = list.length - 1
    return bisect(list, target, low, high) 
}

function bisect (list, target, low, high) {

    console.log('low', low, 'high', high)

    // if the low value is the target, return low
    if (list[low] == target) return low

    // if the high value is the target, return high
    if (list[high] == target) return high

    let spread = high - low + 1

    let halfway = low + Math.floor(spread/2)

    if ( list[halfway] == target ) return halfway

    if ( spread < 4 ) return -1

    // if the value halfway between the high and low value is greater than the target, return this function recursively for values between low and halfway
    if (list[halfway] > target) {
        return bisect ( list, target, low + 1, halfway - 1)
    } else {
        return bisect ( list, target, halfway + 1, high - 1 )
    }
}