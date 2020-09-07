// ##### PROBLEM #####

// This problem was asked by Google.

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

let tree = {
    root: {
        value: 0,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 0,
            left: {
                value: 1,
                left: {
                    value: 1,
                    left: null,
                    right: null
                },
                right: {
                    value: 1,
                    left: null,
                    right: null
                }
            }, 
            right: {
                value: 0,
                left: null,
                right: null
            }
        }
    }
}

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

// ##### Solution #####

// To start off, we should go through some examples.

//   a
//  / \
// a   a
//     /\
//    a  a
//        \
//         A
// This tree has 3 unival subtrees: the two 'a' leaves, and the one 'A' leaf. The 'A' leaf causes all its parents to not be counted as a unival tree.

//   a
//  / \
// c   b
//     /\
//    b  b
//         \
//          b
// This tree has 5 unival subtrees: the leaf at 'c', and every 'b'.

// We can start off by first writing a function that checks whether a tree is unival or not. Then, perhaps we could use this to count up all the nodes in the tree.

// To check whether a tree is a unival tree, we must check that every node in the tree has the same value. To start off, we could define an is_unival function that takes in a root to a tree. 

function is_unival (root) {
    return unival_helper(root, root.value)
}

// We would do this recursively with a helper function. Recall that a leaf qualifies as a unival tree.

function unival_helper (root, value) {
    if (root == null) {
        return true
    }
    if (root.value == value) {
        return unival_helper(root.left, value) && unival_helper(root.right, value)
    }
    return false
}

// And then our function that counts the number of subtrees could simply use that function:

// my test
// let pass = 0
// let count = 0

function count_unival_subtrees_polynomial (root) {

    // my test
    // pass++

    if (root == null) {

        // my test
        // console.log('pass ', pass, ':', root)

        return 0
    }

    // my test
    // console.log('pass ', pass, ':', root)

    let left = count_unival_subtrees_polynomial(root.left)
    let right = count_unival_subtrees_polynomial(root.right)
    
    // my test
    // console.log(left, right)
    // if(is_unival(root)) count++

    // official code
    return is_unival(root) ? 1 + left + right : left + right

    // my test
    // return is_unival(root) ? count++ : count

}

// my test
// console.log(count)

// run program
let result = count_unival_subtrees_polynomial(tree.root)
console.log(result)

// However, this runs in O(n^2) time. For each node of the tree, we're evaluating each node in its subtree again as well. We can improve the runtime by starting at the leaves of the tree, and keeping track of the unival subtree count and value as we percolate back up. This should evaluate each node only once, making it run in O(n) time.

function count_unival_subtrees_linear(root) {

    // my test
    // let totalCount = 0

    let count = helper(root)[0]
    return count
}

function helper(root){

    if ( root == null ) {
        return [0, true]
    }

    // my test
    let helperLeft = helper(root.left)

    let left_count = helperLeft[0]
    let is_left_unival = helperLeft[1]

    // my test
    let helperRight = helper(root.right)

    let right_count = helperRight[0]
    let is_right_unival = helperRight[1]

    let total_count = left_count + right_count

    if (is_left_unival && is_right_unival) {
        if(root.left != null && root.value != root.left.value) {
            return [total_count, false]
        }
        if ( root.right != null && root.value != root.right.value) {
            return [total_count, false]
        }

        // official code
        return [total_count + 1, true]
        
    }

    return [total_count, false]

}

// console.log(count_unival_subtrees_linear(tree.root))