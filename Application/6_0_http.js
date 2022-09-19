const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer((req, res) =>{
    // req is a huge object with useful properties, we are interested in url
    if(req.url==='/'){
        // use res.write() and end request using res.end()
        // or pass the argument to res.end() directly
        res.write('Welcome to Homepage')
        res.end()
    }
    else if(req.url==='/about'){
        res.end('About')
    }
    else if(req.url==='/contact'){
        res.end('Contact')
    }
    else if(req.url==='/dex'){
        const data = readFileSync("content/static/index.html", 'utf-8')
        res.end(data.toString())
    }
    else{
        res.end('Not found!')
    }
})

server.listen(port=100)
console.log("Listening to port",port);
