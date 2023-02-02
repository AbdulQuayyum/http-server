const http = require("http")

const PORT = 3000

const Server = http.createServer()

const Contacts = [
    {
        id: 0,
        name: "Ayinla Akerekoro"
    },
    {
        id: 1,
        name: "Ajadi Jagidijagan"
    },
    {
        id: 2,
        name: "Ajani Ajanlekoko"
    },
    {
        id: 3,
        name: "Alamu Aresejabata"
    }
]

Server.on("request", (req, res) => {
    if (req.url === "/Contacts") {
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
    } else {
        res.statusCode = 404
        res.end()
    }
})

Server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})