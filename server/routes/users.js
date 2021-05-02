const express = require('express')
const router = express.Router()
const  { User }  = require('./../models')

router.get('/', (req, res) => {
  User.findAll()
    .then(gigs => res.json(gigs))
    .catch(err => console.log(err))
})

router.post('/add', (req, res) => {

  console.log(req.body)
  let { first_name, last_name } = req.body
  console.log('first name: ', first_name)
  console.log('last name: ', last_name)

  User.create({
    first_name,
    last_name
  })
    .then(user => res.redirect('/users'))
    .catch(err => console.log(err))
})

router.post('')

module.exports = router