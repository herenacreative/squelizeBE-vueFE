var express = require('express')
var router = express.Router()

const users = require("./users")
const presences = require("./presences")

router.use('/users', users)
router.use('/presences', presences)

module.exports = router