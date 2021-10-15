const express = require('express')

var pokemonRouter = express.Router()

pokemonRouter.get('/', (_, res) => res.send('retorno padrão'))
pokemonRouter.get('/:id', (_, res) => res.send('retorno padrão'))
pokemonRouter.post('/', (_, res) => res.send('retorno padrão'))
pokemonRouter.put('/:id', (_, res) => res.send('retorno padrão'))

module.exports = pokemonRouter;
