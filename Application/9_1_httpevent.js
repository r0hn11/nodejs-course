const http = require('http')

const port =process.env.PORT || 1000
const server = http.createServer();

server.on('request', (req,res)=>{
  console.log(req.url);
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if(req.url=="/") res.end('Home')
  else if(req.url=="/about") res.end('About')
  else if(req.url=="/contact") res.end('Contact')
  else{
    res.statusCode = 404
    res.end('Error '+ res.statusCode)
  }
})

server.listen(port, ()=>{
  console.log("Listening on port 1000");
})

// we can check available events in node.js' documentation