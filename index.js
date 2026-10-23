import express from "express";

const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Home Route")
})

app.listen(PORT, () => {
    console.log(`App is Listening on PORT:${PORT}`)
})