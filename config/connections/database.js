module.exports = {
    mongoose : () => {
        let data = require('mongoose')

        let mongoString = 'mongodb://admin:LOCALhost@3.88.157.89:27017/mmsteste?authSource=admin&authMechanism=SCRAM-SHA-256&readPreference=primary&ssl=false&directConnection=true'
        
        data.Promise = global.Promise
        data.connect(mongoString)
            .then(() =>{
                console.log('Connection Status: Success connection')
            })
            .catch(error => {
                console.log('Error log: ' + error)
            })

        return data
    }
}