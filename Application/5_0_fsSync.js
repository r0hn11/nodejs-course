//Synchronous or Blocking code

const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

let firstfile = readFileSync(path.join(path.resolve(),'content', 'subfolder','read.txt'), 'utf-8')
firstfile = firstfile.replace('Hey', 'Hello')

writeFileSync(
    path.join(path.resolve(),'content', 'subfolder','write.txt'),
    `${firstfile}`
)
