module.exports = app => {
    /* painel */
    let admin = '/admin'

    app.route(admin + '/aluno/cadastrar').get((req, res) => {
        res.render('admin/aluno/cadastrar_aluno')
    })

    app.route(admin + '/aluno/cadastrar').post((req, res) => {
        console.log(req.body)
        res.send('Salvo')
    })

    app.route(admin + '/aluno/editar').get((req, res) => {
        res.render('admin/aluno/editar_aluno')
    })

    app.route(admin + '/aluno/visualizar').get((req, res) => {
        res.render('admin/aluno/visualizar_alunos')
    })

    app.route(admin + '/aluno/vizualizar_aluno').get((req, res) => {
        res.render('admin/aluno/cadastrar_aluno')
    })
}