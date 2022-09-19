{1588
  const http = require('http')
  const port = 1000


  const server = http.createServer((req, res)=>{
      if(req.url === '/'){
          res.end('Home')
      }
      else if(req.url === '/about'){
          // BLOCKING CODE:

          for(i=0;i<100;i++){
              for(j=0;j<100;j++){
                  console.log(`${i}, ${j}`)
              }
          }

          // Page (and all parallel serving pages) won't load until the loop is completed, that is the synchronous way. This is why we should avoid the synchronous way

          res.end('About')
      }
      else if(req.url === '/contact'){
          res.end('Contact')
      }
      else{
          res.end('404')
      }
  })

  server.listen(port, ()=>{
      console.log(`Listening on port ${port}`)
  })
}


/* here, we are offloading the setTimeout even when it is 0. i.e. rest of non-blocking code will execute before the setTimeout */
{
  console.log(1);
  setTimeout(()=>{
    console.log(2);
  },0)
  console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);console.log(3);
}