// time complexity for this solution is O(N) since lookups of sets are O(1) each

function two_sum ( list, k ) {
    let seen = new Set()
    for ( let i = 0 ; i < list.length ; i++ ) {
        let number = k - list[i]
        if (seen.has(number)) {
            return true
        }
        seen.add(list[i])
    }
    return false
}

console.log(two_sum([9,1,9,1], 18))