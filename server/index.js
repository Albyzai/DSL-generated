const express = require('express')
const { sequelize } = require('./models')
const app = express()
const cors = require('cors')

const main = async () => {
  await sequelize.sync()
}

main()

app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/users', require('./routes/users'))
app.use('/address', require('./routes/address'))
app.get('/', (req, res) =>  res.send('INDEX'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server started on port 5000'))
