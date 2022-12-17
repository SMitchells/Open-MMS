module.exports = app => {
    let admin = '/admin'

    app.route(admin + '/config/usuarios').get((req, res) => {
        let Users = app.controllers.CadastroUsuarios.read(app, req)
        //console.log(Users)
        res.render('admin/configs/usuarios')
    })
/*
    app.route(admin + '/usuarios/cadatro').post((req, res) => {
        app.controllers.CadastroUsuarios.create(app, req)
        res.redirect(admin + '/config/usuarios')
    })*/
}