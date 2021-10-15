const express = require('express')

var pokemonRouter = express.Router()

pokemonRouter.get('/', (req, res) => {
    res.send('deu certo')
})
pokemonRouter.get('/:id')
pokemonRouter.post('/')
pokemonRouter.put('/:id')

module.exports = pokemonRouter;
