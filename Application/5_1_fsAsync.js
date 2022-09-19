//Asynchronous or Non-blocking code

const {readFile, writeFile, read} = require('fs')
const { type } = require('os')
const path = require('path')

console.log('start')

const readpath = path.join(path.resolve(),'content', 'subfolder','read.txt')
const writepath = path.join(path.resolve(),'content', 'subfolder','write.txt')
const encoding = 'utf-8'

// console.log(readpath.toString())

readFile(readpath.toString(), encoding, (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const firstfile = result
    console.log(firstfile);
    input = firstfile + '\nRohan'
    writeFile(writepath.toString(), input, (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result);
        console.log('Success')
    })
})


console.log('End')

//OUTPUT OF ASYNC METHOD :
// start
// End
// Success
