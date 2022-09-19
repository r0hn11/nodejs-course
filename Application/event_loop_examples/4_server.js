const http = require('http')

const port = 100

http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Home')
    }
    else if(req.url === '/about'){
        res.end('About')
    }
    else if(req.url === '/contact'){
        res.end('Contact')
    }
    else{
        res.end('404')
    }
}).listen(port, ()=>{
    console.log(`Port no.: ${port}`)
})


// Even when a new request is raised, .listen callback stays alive throughout