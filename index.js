const express = require('express')
const app = express()
const port = 3000

let users = [
    {id: 1, name: "Prabhat Bhatia"},
    {id: 2, name: "Suhani Yadav"},
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users',(req,res) => {
    res.send(users)
})

// dynamic routing
app.get('/users/:id', (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        })
    }
    res.json(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})