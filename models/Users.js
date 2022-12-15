const userSchema = require('./schemas/usersSchema')

module.exports = {
    create : (app, body) => {
        let User = app
                    .config
                    .connections
                    .database
                    .mongoose() .model('Users', userSchema)

        //Montando a query
        let user = new User({
            name : body.name,
            date : body.date,
            status : body.status,
            email : body.email,
            password : body.password,
            access : body.access,
            auditable : body.auditable,
            observation : {
                content : body.observation,
                date : (body.observation != '' ? Date.now : '')
            }
        })

        /* Save new user 
        user.save((error, result) => {
            if(error){
                return error
            }

            return result
        })*/

        return user
    } //End create func
}