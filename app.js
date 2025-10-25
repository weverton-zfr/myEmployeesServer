//importando o express
const express = require("express")

//importando rotas
const routeEmployee = require("./routes/employee")

//chamando o express
const app = express()

app.use(express.json())

app.use('/employee', routeEmployee)

//porta do server
const port = 8000

app.listen(port, () => {
    console.log("Tudo Funcionando")
})