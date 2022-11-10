const express = require('express')
const rota = require('./src/routers/router')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', rota)

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
})