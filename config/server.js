const { engine } = require('express-handlebars')
const server = {
    express : require('express'),
    bodyParser : require('body-parser'),
    mongoose : require('mongoose'),
    path: require('path')
}

let app = server.express()
app.use(server.bodyParser.urlencoded({extended:true}))
app.use(server.bodyParser.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

/*Export data */
module.exports = {
    app : app,
    server: server
}