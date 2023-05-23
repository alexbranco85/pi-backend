const routes = require('./routes/index')
const path = require("path")
const cookieParser = require('cookie-parser')
const express = require('express')
const methodOverride = require('method-override') // métodos PUT e DELETE
const app = express()

// captura na forma de objeto literal tudo o que vem de um formulário
app.use(express.urlencoded({ extended: false }))
// converte as informações em formato JSON
app.use(express.json())
// métodos PUT e DELETE
app.use(methodOverride('_method'))

// liberando acesso a pasta public
app.use(express.static(path.resolve("public")))

app.use(cookieParser())


/**
 * Rotas
 */

app.use(routes)

app.listen(3001, () => {
  console.log('Servidor Rodando!')
})