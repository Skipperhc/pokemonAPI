const express = require('express')

var townRouter = express.Router()

townRouter.get('/', (req, res) => {

})
townRouter.get('/:id')
townRouter.post('/:id')
townRouter.put('/:id')

module.exports = townRouter;
