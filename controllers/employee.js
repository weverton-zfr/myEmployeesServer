const { getAllEmployees, getEmployeeID, postNewEmployee, modifyEmployees, deleteEmployees} = require("../services/employee")

function getEmployees(req, res){
    try{
        const employee = getAllEmployees()
        res.send(employee)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function getEmployee(req, res){
    try{
        const id = req.params.id
        const employee = getEmployeeID(id)
        res.send(employee)
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function postEmployee(req, res){
  try{
        const newEmployee = req.body
        postNewEmployee(newEmployee)
        res.status(200)
        res.send("Funcionario Adicionado Com Sucesso!")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchEmployee(req, res){
    try{
        const id = req.params.id
        const body = req.body
        modifyEmployees(body, id)
        res.send("Item modificado com sucesso!")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteEmployee(req, res){
    try{
        const id = req.params.id
        deleteEmployees(id)
        res.send("Item deletado com sucesso!")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getEmployee,
    getEmployees,
    postEmployee,
    patchEmployee,
    deleteEmployee
}