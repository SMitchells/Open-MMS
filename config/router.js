let server = require('./server')

/* Import routes */
let home = require('../routes/index')
let aluno = require('../routes/admin/aluno')
let curso = require('../routes/admin/curso')

// Add in app, each route.
server.app.use('/', home)
server.app.use('/admin', aluno)
server.app.use('/admin', curso)


module.exports = server