function getAllPositions() {
    return JSON.parse(require('fs').readFileSync("positions.json"));
}

module.exports = {
    getAllPositions
}