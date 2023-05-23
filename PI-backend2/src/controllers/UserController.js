const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const users = require('../database/users.json')

const UserController = {
  index: (req, res) => {
    res.render('login')
  },

  // Create form user - View
  createFormEJS: (req, res) => {
    res.render('cadastro')
  },
  // Create user
  createEJS: (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      res.render('cadastro', { errors: errors.mapped() }) // ou array()

    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto
    const cpf = users.find(user => user.cpf === req.body.cpf) // encontra o usuário através do e-mail - e retorna o objeto

    if (!user && !cpf) {
      let newUser = {
        id: users.length > 0 ? Number(users[users.length - 1].id) + 1 : 1,
        ...req.body
      }
      // delete newUser.pwdConfirm // remove propriedade pwdConfirm - porque não é necessário gravar no banco

      const hash = bcrypt.hashSync(newUser.pwd, 10) // gera o hash da senha
      newUser.pwd = hash // salva na propriedade senha

      users.push(newUser)

      console.log('users: ', users)

      res.redirect('/')
    } else res.render('cadastro', { errors: [{ msg: "Usuário já cadastrado!" }] })
  },
  // Login form user - View
  loginFormEJS: (req, res) => {
    res.render('login')
  },
  // Login
  loginEJS: (req, res) => {
    const user = users.find(user => user.email === req.body.email) // encontra o usuário através do e-mail - e retorna o objeto

    if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) { // compara a senha recebida no body com a senha gravada no banco de dados
      const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey') // gera o token do usuário com JWT
      res.cookie('userName', user.nome, { maxAge: 2592000000 })
      res.cookie('token', token, { maxAge: 2592000000 }) // expira em 30 dias
      res.redirect('/')
    } else res.render('login')
  }
}
module.exports = UserController