const express = require('express')
const paty = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(4545, () => console.log('Listening on 4545.'))