const { getAllPositions } = require('../services/positions');

function getPositions(req, res) {
    try {
        const positions = getAllPositions()
        res.send(positions)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getPositions
}