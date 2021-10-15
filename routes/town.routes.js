const express = require('express')

var townRouter = express.Router()

townRouter.get('/', (req, res) => {

})
townRouter.get('/:id', (_, res) => res.send('retorno padrão'))
townRouter.post('/:id', (_, res) => res.send('retorno padrão'))
townRouter.put('/:id', (_, res) => res.send('retorno padrão'))

module.exports = townRouter;
