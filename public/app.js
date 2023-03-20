const path = require("path")
const express = require('express')
const app = express()
app.use(express.json())
const routes = require('./routes/index')

app.set("view engine", "ejs")

app.set("views", path.resolve("public"))
app.use(routes)
app.listen(3000, () => {console.log('Servidor rodando')
})