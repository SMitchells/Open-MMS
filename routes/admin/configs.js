module.exports = app => {
    let admin = '/admin'

    app.route(admin + '/config/usuarios').get((req, res) => {
        res.render('admin/configs/usuarios')
    })

    app.route(admin + '/usuarios/cadatro').post((req, res) => {
        console.log(
            app.controllers.CadastroUsuarios.main(app, req)
        )
        
        
        res.redirect(admin + '/config/usuarios')
    })
}