const http = require('http')
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res)=>{
  /* underlying code for readFileSync is not safe as a huge data is to be sent to server*/
  // const content = readFileSync("content/subfolder/bigtext.txt","utf-8")
  // res.end(content)

  const fileStream = createReadStream("content/subfolder/bigtext.txt","utf-8")
  fileStream.on('open',()=>{
    fileStream.pipe(res);
  })
  fileStream.on('error',(err)=>{
    res.end(err)
  })


}).listen(1000)