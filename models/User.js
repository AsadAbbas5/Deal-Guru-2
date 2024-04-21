const moment = require("moment/moment")
const mongoose = require("mongoose")

const useSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
  
    email: {
        type: String,
        require: true

    },
    password: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    }

})

const User = mongoose.model('users', useSchema)
module.exports = User