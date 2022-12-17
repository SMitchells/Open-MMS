const { engine } = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const session = require('express-session')
const flash = require('connect-flash')


/*Create a express instance... */
let app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

//Session...
app.use(
    session({
        secret: 'YzTeF%$#9621@!',
        resave: true,
        saveUninitialized: true
    })
)

//Flash
app.use(flash())

//Middleware...
app.use((req, res, next) => {
    res.locals.show_msg = req.flash('show_msg'),
    res.locals.success = req.flash('success'),
    res.locals.error = req.flash('error')
    next()
})

consign()
    .include('config/connections')
    .then('routes')
    .then('models')
    .then('controllers')
    .into(app)

/*Export data */
module.exports = app