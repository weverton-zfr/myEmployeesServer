//importando o express
const express = require("express")

//importando rotas
const routeEmployee = require("./routes/employee")

//chamando o express
const app = express()


app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next()
});

app.use('/employee', routeEmployee)

//porta do server
const port = 8000

app.listen(port, () => {
    console.log("Tudo Funcionando")
})