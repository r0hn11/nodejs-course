const path = require('path')

console.log(path.sep)   //gives the path seperator for a system (diff for diff OS)

const filepath = path.join('content','subfolder', 'sample.txt')
console.log(filepath+"\n"+typeof(filepath))

console.log(path.basename(__filename));     // gives base (last portion of a path)

const absolute = path.resolve(__dirname,'content','..','content','subfolder','test.txt')   // gives absolute path
console.log(__dirname)
console.log(absolute)
