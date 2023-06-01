const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    console.log('req.headers: ', req.headers)
    if (req.headers.authorization) {
        try {
            jwt.verify(req.headers.authorization, 'secretKey')
            next()
        } catch (error) {
            res.status(401).json({ error })
        }
    }else res.stauts(401).json({ error: "usuário não autenticadfo"})
}
module.exports = auth