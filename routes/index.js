module.exports = app => {
    app.route('/').get((req, res) => {
        //console.log(res.log)
        res.render('login')
    })
}
