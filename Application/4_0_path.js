const path = require('path')

console.log(path.sep)   //gives the patjh seperator for a system (diff for diff OS)

const filepath = path.join('/content','/subfolder', 'sample.txt')
console.log(filepath)

console.log(path.basename(__filename));     // gives base (last portion of a path)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')   // gives absolute path
console.log(absolute)