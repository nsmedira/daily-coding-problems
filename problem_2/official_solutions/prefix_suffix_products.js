products([1,2,3,4,5])

function products(integers) {

    // generate prefix products
    prefix_products = []

    for ( integer of integers ) {
        if ( prefix_products.length > 0 ) {

            // add new value to array that is the product of the last value in the array by the current integer
            prefix_products.push(prefix_products[prefix_products.length - 1] * integer)
        } else {

            // if no values in the prefix_products array, add first value = current integer
            prefix_products.push(integer)
        }

    }

    // generate suffix products
    suffix_products = []
    for ( integer of integers.reverse() ) {
        if ( suffix_products.length > 0 ) {
            suffix_products.push(suffix_products[suffix_products.length - 1] * integer)
        } else {
            suffix_products.push(integer)
        }
    }

    // generate result
    result = []
    for ( i = 0 ; i < integers.length ; i++ ) {
        if ( i == 0 ) {
            result.push(suffix_products[i + 1])
        } else if ( i == integers.length - 1) {
            // left off here
        }
    }

    console.log(prefix_products)
    console.log(suffix_products)
    
}