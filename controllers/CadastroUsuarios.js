module.exports = {
    main : (app, req) => {
        let result = app.models.Users.create(app, req.body)
        //Actions after result
        return result
    }
}