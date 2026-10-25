import express from "express";
import cors from "cors"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors({origin:`http://localhost:5173`}))

app.get("/", (req, res) => {
    res.send({ name: "Arslan", age: 22 })
})

app.listen(PORT, () => console.log(`App is Listening on PORT:${PORT}`))