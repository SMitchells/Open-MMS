const courseSchema = require('./schemas/courseSchema')

module.exports = {
    create : (app, body) => {
        let Course = app
                    .config
                    .connections
                    .database
                    .mongoose() .model('Courses', courseSchema)

        let course = new Course({
            cohortID : body.id,
            courseName : body.name,
            date : body.date,
            disciplines : body.disciplines,
            durationTime : body.durationTime,
            grade : body.grade
        })
    } //End create func
}