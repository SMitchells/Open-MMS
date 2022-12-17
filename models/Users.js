const userSchema = require('./schemas/usersSchema')

module.exports = {

    create : (app, body) => {
        let User = app
                .config
                .connections
                .database
                .mongoose()
                .model('Users', userSchema)

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

        ///Save new user 
        user.save((error, success) => {
            console.log('Entrei no save')
            if(error){
                result = 'See log for this error...'
            }else{
                result = 'See success_log for this log.'
            }
        })

        return result
    }, //End create func

    read : (app, req) => {
        let User = app
                    .config
                    .connections
                    .database
                    .mongoose()
                    .model('Users', userSchema)

        User.find().lean().then(Users => {
           req.flash('show_msg',)
        })
    }
}