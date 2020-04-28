var express = require('express')
var router = express.Router()
const { Presence } = require('../../db/models')

router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body
  const user = await Presence.create({
    firstName,
    lastName,
    email,
  })

  res.json({
    user
  })
})

router.get('/', async (req, res) => {
  const users = await Presence.findAll()

  res.json({
    users
  })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Presence.destroy({ where: { id } })

  res.json({
    user
  })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body

  const user = await Presence.update({ firstName, lastName, email }, { where: { id } });

  res.json({
    user
  })

})

module.exports = router