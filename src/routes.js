const { Router } = require('express')
const LinkController = require('./controllers/LinkController')

const routes = Router()

routes.post('/create-link', new LinkController().create)
routes.get('/:token', new LinkController().show)

module.exports = routes