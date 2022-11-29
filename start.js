/* START A Open-MMS */
let start = require('./config/router')

/*This is define, here, for this is tranfer undefined. */
start.app.use(start.server.express.static(start.server.path.join(__dirname, '/public')))

start.app.listen(3100, () => {
    console.log('Estou online...' + start.app)
});