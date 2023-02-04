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
    const Items = req.url.split("/")
    // /Contacts/2 => ["", "Contacts", "2"]
    if (req.method === "POST" && Items[1] === "Contacts") {
        req.on("data", (data) => {
            const Contact = data.toString()
            console.log("Request:", Contact)
        })
    }
    else if (req.method === "GET" && Items[1] === "Contacts") {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        if (Items.length === 3) {
            const ContactIndex = Number(Items[2])
            res.end(JSON.stringify(Contacts[ContactIndex]))
        } else {
            res.end(JSON.stringify(Contacts))
        }
    } else if (req.method === "GET" && Items[1] === "Messages") {
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