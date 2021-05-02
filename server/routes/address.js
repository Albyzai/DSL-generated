const express = require('express')
const router = express.Router()
const  { Address }  = require('./../models')

router.get('/', (req, res) => {
  Address.findAll()
    .then(address => res.json(address))
    .catch(err => console.log(err))
})

router.get('/add', (req, res) => {
  const data = {
    street_name: 'Niels Bohrs Alle',
    street_number: 23
  }

  let { street_name, street_number } = data

  Address.create({
    street_name,
    street_number
  })
    .then(user => res.redirect('/address'))
    .catch(err => console.log(err))
})

module.exports = router