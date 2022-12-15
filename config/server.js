const { engine } = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')


/*Create a express instance... */
let app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

consign()
    .include('routes')
    .then('models')
    .then('controllers')
    .then('config/connections')
    .into(app)

/*Export data */
module.exports = app