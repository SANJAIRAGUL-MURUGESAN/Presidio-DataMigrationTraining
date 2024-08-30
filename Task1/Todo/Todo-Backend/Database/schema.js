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

module.exports = {
    Todo : db.model('Todo',todoSchema,'TODO')
}