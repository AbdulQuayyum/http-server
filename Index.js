const http = require('http')

const PORT = 3000

const Server = http.createServer()

Server.on("request", (req, res) => {
    if (req.url === "/Names") {
        // res.writeHead(200, {
        //     "Content-Type": "application/json",
        // })
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({
            id: 1,
            name: "Abdul-Quayyum Alao"
        }))
    } else if (req.url === "/Messages") {
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>")
        res.write("<body>")
        res.write("<ul>")
        res.write("<li>Heyy Abdul-Quayyum!</li>")
        res.write("<li>What is your opinion about religion?</li>")
        res.write("</ul>")
        res.write("</body>")
        res.write("</html>")
        res.end()
    }
})

Server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})