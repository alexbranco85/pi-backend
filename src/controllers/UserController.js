const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { Usuario } = require('../models')
const { Endereco } = require('../models')

const UserController = {
  // Create user
  create: async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    try {
      const verificaEmail = await Usuario.findOne({
        where: {
          email: req.body.email
        }
      })

      const verificaCpf = await Usuario.findOne({
        where: {
          cpf: req.body.cpf
        }
      })

      if (!verificaEmail && !verificaCpf) {
        let newUser = req.body;

        const hash = bcrypt.hashSync(newUser.pwd, 10)
        newUser.pwd = hash
        await Usuario.create(newUser)
        res.status(201).json({ msg: 'Usuário criado com sucesso!' })

      } else res.status(400).json({ error: "Usuário já cadastrado!" })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  // Login
  login: async (req, res) => {
    try {
      const user = await Usuario.findOne({
        where: {
          email: req.body.email
        }
      })

      if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) {
        const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey')
        res.status(200).json({ token, id: user.id, email: user.email, nome: user.nome, is_admin: user.is_admin })
      } else res.status(400).json({ error: "Usuário ou Senha incorretos!" })
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  saveAddress: async (req, res) => {
    const errors = validationResult(req)
    try {
      let newAddress = req.body;
      await Endereco.create(newAddress)
      res.status(200).json({ message: 'Address saved successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message, req: req.body, errors })
    }
  },

  showAddressByUser: async (req, res) => {
    const { id } = req.params
    try {
      const address = await Endereco.findAll({
        where: {
          id_usuario: id
        }
      });
      res.status(200).json(address)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
}

module.exports = UserController