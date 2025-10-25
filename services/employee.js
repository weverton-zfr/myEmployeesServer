const fs = require('fs')

function getAllEmployees(){
    return JSON.parse(fs.readFileSync("employee.json"))
}

function getEmployeeID(id){
    const employee = JSON.parse(fs.readFileSync("employee.json"))
    const employeeFilter = employee.filter(employee => employee.id == id)[0]
    return employeeFilter
}

function postNewEmployee(newEmployee){
    const employee = JSON.parse(fs.readFileSync("employee.json"))
    const newListEmployees = [...employee, newEmployee]
    fs.writeFileSync("employee.json", JSON.stringify(newListEmployees))
}

function modifyEmployees(modifications, id){
    let currentEmployee = JSON.parse(fs.readFileSync("employee.json"))
    const idModified = currentEmployee.findIndex(employee => employee.id == id)

    const employeeModified = {...currentEmployee[idModified], ...modifications}

    currentEmployee[idModified] = employeeModified

    fs.writeFileSync("employee.json", JSON.stringify(currentEmployee))
}

function deleteEmployees(id){
    const employee = JSON.parse(fs.readFileSync("employee.json"))
    const employeeFilter = employee.filter(employee => employee.id != id)
    
    fs.writeFileSync("employee.json", JSON.stringify(employeeFilter))
}

module.exports = {
    getAllEmployees,
    getEmployeeID,
    postNewEmployee,
    modifyEmployees,
    deleteEmployees
}