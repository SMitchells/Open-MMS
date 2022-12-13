module.exports = app => {
    let admin = '/admin'

    app.route(admin + '/config/usuarios').get((req, res) => {
        res.render('admin/configs/usuarios')
    })
}