const express = require('express')
const app = express()
var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('Heasdfllo Woah!'))
app.listen(port, () => console.log('Example app listening on port' + port))
