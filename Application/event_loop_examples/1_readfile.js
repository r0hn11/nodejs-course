const {readFile} = require('fs')
const path = require('path')

console.log('start')

console.log((path.join(path.resolve(),'/content/subfolder/read.txt')).toString())


readFile((path.join(path.resolve(),'/content/subfolder/read.txt')).toString(), 'utf-8', (err, res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    console.log('Success')
})

console.log('next')

// Output : (Since readFile is asynchronous)
/*
start
next
Hey there !
Success
*/