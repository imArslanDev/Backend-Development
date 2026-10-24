import express from "express";

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Home Route</h1>")
})

app.post("/user", (req, res) => {
    const body = req.body
    console.log("Body Data:", body)
    res.send(body)
})

app.get("/about", (req, res) => {
    res.send({page:"About"})
})
app.get("/services", (req, res) => {
    res.send("Services Route")
})
app.get("/contact", (req, res) => {
    res.send("Contact Page")
})

app.listen(PORT, () => {
    console.log(`App is Listening on PORT:${PORT}`)
})