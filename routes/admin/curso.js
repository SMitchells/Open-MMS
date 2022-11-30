module.exports = app => {
    let admin = '/admin'
    
    app.route(admin + '/curso/cadastrar').get((req, res) => {
        res.render('admin/curso/cadastrar_curso')
    })

    app.route(admin + '/curso/editar').get((req, res) => {
        res.render('admin/curso/editar_curso')
    })

    app.route(admin + '/curso/visualizar').get((req, res) => {
        res.render('admin/curso/editar_curso')
    })

    app.route(admin + '/curso/detalhes').get((req, res) => {
        res.render('admin/curso/editar_curso')
    })
}