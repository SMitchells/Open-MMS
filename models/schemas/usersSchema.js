let mongoose = require('mongoose')
let Schema = mongoose.Schema

let user = new Schema({
    name : {
        type : String,
        required: true
    },

    date : {
        type : Date,
        default: Date.now,
        required: true
    },

    status : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    password : {
        type : String,
        required: true
    },

    access : {
        type : String,
        required: true
    },

    auditable : {
        type : Boolean,
        required: true
    },

    observation : [ 
        {
            content : {
                type : String,
            },
            date : {
                type: Date,
            }
        }
    ]
})

module.exports = user