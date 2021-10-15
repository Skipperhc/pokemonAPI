const express = require('express')

var battleRouter = express.Router()

battleRouter.get('/', (req, res) => {

})
battleRouter.get('/:id', (_, res) => res.send('retorno padrão'))
battleRouter.post('/start', (_, res) => res.send('retorno padrão'))
battleRouter.post('/attack', (_, res) => res.send('retorno padrão'))
battleRouter.post('/finish', (_, res) => res.send('retorno padrão'))

module.exports = battleRouter;