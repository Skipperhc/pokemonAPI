const express = require('express')

var battleRouter = express.Router()

battleRouter.get('/', (req, res) => {

})
battleRouter.get('/:id')
battleRouter.post('/start')
battleRouter.post('/attack')
battleRouter.post('/finish')

module.exports = battleRouter;