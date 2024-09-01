const mongoose = require('mongoose')
const {db} = require('./mongoose.js')

const todoSchema = new mongoose.Schema({
    todo : {
        type : String
    },
    status : {
        type : String
    }
})

const userScehma = new mongoose.Schema({
    Firstname:{
        type : String
    },
    Lastname:{
        type: String
    },
    Username:{
        type: String
    },
    Password:{
        type: String
    }
})

module.exports = {
    Todo : db.model('Todo',todoSchema,'TODO'),
    User : db.model('User',userScehma,'USER')
}