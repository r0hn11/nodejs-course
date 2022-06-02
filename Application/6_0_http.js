const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url==='/'){
        res.end('Home')
    }
    else if(req.url==='/about'){
        res.end('About')
    }
    else if(req.url==='/contact'){
        res.end('contact')
    }
    else{
        res.end('Not found!')
    }
})

server.listen(port=100)