const express = require('express')

const app = express()

const port = 3000

app.get('/',(req,res) => {
    res.send('hello world')
})

app.listen(port,() => {
    console.log(`Server is running at posr ${port}`)
    console.log(`  Please visit http://localhost:${port}`)
})