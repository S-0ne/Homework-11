const http = require('http')

const host = 'localhost'
const port = 8000

const server = http.createServer(
    function(reg, res){
        res.end('<html><body>Hello and welcome to my space</body></html>')
    }
)

server.listen(port, host, function(){
    console.log('Server working now...')
    console.log(`Welcome to http://${host}:${port}/`)
})