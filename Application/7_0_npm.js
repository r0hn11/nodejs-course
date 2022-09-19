
// loadash removes nested arrays and returns a single array of objects
const lodash = require('lodash')

const items = [1,[2,[3,[4,5,6.5]]]]
console.log(items)

const cleanItems = lodash.flattenDeep(items)
console.log(cleanItems)