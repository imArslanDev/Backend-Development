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