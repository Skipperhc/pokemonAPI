const express = require('express')
const pokemonRoutes = require('./pokemon.routes')
const townRoutes = require('./town.routes')
const battleRoutes = require('./battle.routes')

var router = express.Router()

router.use('/pokemon', pokemonRoutes);
router.use('/town', townRoutes);
router.use('/battle', battleRoutes);

module.exports = router;
