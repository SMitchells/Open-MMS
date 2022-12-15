let mongoose = require('mongoose')
let Schema = mongoose.Schema

let course = new Schema({
    cohortID : {
        type: Number,
        required : true
    },

    courseName : {
        type: String,
        required : true
    },

    date : {
        type: Date,
        required : true,
        default : Date.now
    },

    disciplines : {
        type: Number,
    },

    durationTime : {
        type: Number,
        required : true
    },

    grade : [
        {
            moodleID : {
                type: Number,
                required : true
            },
            name : {
                type: String,
                required : true
            },
            duration : {
                type: Number,
            }
        }
    ]
})

module.exports = course