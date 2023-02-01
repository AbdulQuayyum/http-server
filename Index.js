const http = require('http')

const PORT = 3000

const Server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    })
    res.end("Heyy there, Friend!")
})

Server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})