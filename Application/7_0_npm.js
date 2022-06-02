const lodash = require('lodash')

const items = [1,[2,[3,[4]]]]
console.log(items)

const cleanItems = lodash.flattenDeep(items)
console.log(cleanItems)