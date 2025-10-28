//importando o express
const express = require("express")
const cors = require("cors")

//importando rotas
const routeEmployee = require("./routes/employee")
const routePositions = require("./routes/positions")

//chamando o express
const app = express()


app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});;

app.use('/employee', routeEmployee)

app.use('/positions', routePositions)

//porta do server
const port = 8000

app.listen(port, () => {
    console.log("Tudo Funcionando")
})