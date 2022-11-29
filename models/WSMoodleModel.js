class WSMoodleModel{
    
    constructor(){
        this.WSCredentials = require('../config/credentials/WSCredentials')
    }

    getUserCourses = {
        ...this.WSCredentials.webService.token,
        'wsfunction':'core_enrol_get_users_courses',
        'userid' : ''
    }

}

module.exports = new WSMoodleModel()