const fs = require('fs');

function logSite(req, res, next) {
    fs.appendFileSync('log.txt', "O usuário acessou a url: " + req.url)
    next();
}

module.exports = logSite