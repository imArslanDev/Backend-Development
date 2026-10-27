import express from "express";
import cors from "cors"

const app = express()
const PORT = 3000
app.use(express.json())


/*
let password = 'Arslan1234'

app.use((req, res, next) => {
    if(req.body.password !== password) {
        res.send("Password Not Matched")
    } else {
        next()
    }
})

app.use(cors({origin:`http://localhost:5173`}))

app.get("/", (req, res) => {
    res.send({ name: "Arslan", age: 22 })
    console.log(req.get())
})


app.post("/", (req, res) => {
    console.log(req.body)
    res.send({success: true})
})
*/

app.get("/check", (req, res) => {
    console.log(req.get("user-agent"))
    res.set("X-userAge", 100)
    res.removeHeader("x-powered-by")
    res.send("Arslan")

})
app.listen(PORT, () => console.log(`App is Listening on PORT:${PORT}`))