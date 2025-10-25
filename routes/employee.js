const {Router} = require("express")
const {getEmployee, getEmployees, postEmployee, patchEmployee, deleteEmployee} = require("../controllers/employee")

const router = Router()

router.get("/", getEmployees)

router.get("/:id", getEmployee)

router.post("/", postEmployee)

router.patch("/:id", patchEmployee)

router.delete("/:id", deleteEmployee)

module.exports = router