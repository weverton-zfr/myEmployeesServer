//importando o express
const express = require("express")
const cors = require("cors")

//importando rotas
const routeEmployee = require("./routes/employee")
const routePositions = require("./routes/positions")

//chamando o express
const app = express()


app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/employee', routeEmployee)

app.use('/positions', routePositions)

//porta do server
const port = 8000

app.listen(port, () => {
    console.log("Tudo Funcionando")
})