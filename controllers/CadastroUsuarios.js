module.exports = {
    create : (app, req) => {
        return app.models.Users.create(app, req.body)
        //Actions after result
        //console.log('Controller:' + result)
    },

    read : (app, req) => {
        return app.models.Users.read(app, req)
    }
}