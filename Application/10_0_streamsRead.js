// while reading file using methods like readFile, for big data, a variable storage is not valid, also it is a large space consumption.

const {createReadStream, writeFile} = require('fs')

for(let i=0;i<10000;i++){
  writeFile("content/subfolder/bigtext.txt", `count ${i}\n`, {flag: 'a'},(err)=>{console.log(err);})
}

const stream = createReadStream("content/subfolder/bigtext.txt", {encoding: 'utf-8', highWaterMark: 9000})

// default size of buffer 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("content/subfolder/bigtext.txt")
// const stream = createReadStream("content/subfolder/bigtext.txt", {highWaterMark: 90000})
// const stream = createReadStream("content/subfolder/bigtext.txt", {encoding: 'utf-8'})

stream.on('data', (res)=>{
  console.log(res);
  console.log(res.length);
})

stream.on('error', (err)=>{
  console.log('error');
})