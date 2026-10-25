// import express, { json } from "express";

// const app = express()
// const PORT = 3000

// app.use(express.json())

// let users = [
//   {
//     "id": 101,
//     "name": "Alice Johnson",
//     "department": "Engineering",
//     "role": "Software Engineer",
//     "email": "alice.johnson@example.com"
//   },
//   {
//     "id": 102,
//     "name": "Bob Smith",
//     "department": "Marketing",
//     "role": "Marketing Specialist",
//     "email": "bob.smith@example.com"
//   },
//   {
//     "id": 103,
//     "name": "Charlie Davis",
//     "department": "Human Resources",
//     "role": "HR Manager",
//     "email": "charlie.davis@example.com"
//   },
//   {
//     "id": 104,
//     "name": "Diana Prince",
//     "department": "Finance",
//     "role": "Financial Analyst",
//     "email": "diana.prince@example.com"
//   },
//   {
//     "id": 105,
//     "name": "Ethan Hunt",
//     "department": "Operations",
//     "role": "Operations Manager",
//     "email": "ethan.hunt@example.com"
//   }
// ]

// app.get("/", (req, res) => {
//     res.send(users)
// })

// // Dynamic URL
// app.get("/user/:id", (req, res) => {
//     const id = req.params.id
//     console.log(id)
//     let filteredUser = users.find((user) => user.id == id)
//     if(filteredUser === undefined) res.send("<h1>404 User not found</h1>")
//     res.send(filteredUser)
// })

// // Query Parameters
// app.get("/search", (req, res) => {
//     const queryData = req.query
//     console.log(queryData)
//     res.send(queryData)

// })

// app.post("/user", (req, res) => {
//     // res.send("Post Method Chala")
//     const getBodyData = JSON.stringify(req.body)
//     res.send(`Body Data:${getBodyData}`)
//     console.log("Body Data:", getBodyData)
// })

// app.get("/about", (req, res) => {
//     res.send({page:"About"})
// })


// app.listen(PORT, () => {
//     console.log(`App is Listening on PORT:${PORT}`)
// })


// Server side rendering example
import express from "express";
const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: black;
            margin-top: 50px;
            color: #fefefe;
        }
    </style>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a clean and simple HTML5 template.</p>
</body>
</html>
        `)
})

app.listen(PORT, () => console.log(`App is Listening on PORT:${PORT}`))