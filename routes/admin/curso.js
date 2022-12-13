module.exports = app => {
    let admin = '/admin'
    
    app.route(admin + '/curso/cadastrar').get((req, res) => {
        res.render('admin/curso/cadastrar')
    })

    app.route(admin + '/curso/editar').get((req, res) => {
        res.render('admin/curso/editar')
    })

    app.route(admin + '/curso/visualizar').get((req, res) => {
        res.render('admin/curso/visualizar')
    })

    app.route(admin + '/curso/detalhes').get((req, res) => {
        res.render('admin/curso/detalhes')
    })
}