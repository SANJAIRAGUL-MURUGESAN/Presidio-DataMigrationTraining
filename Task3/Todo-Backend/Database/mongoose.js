const mongoose = require('mongoose')

const conn = mongoose.createConnection('mongodb+srv://sanjairagulm2020it:Sanjairagul123@cluster0.v3bhsk9.mongodb.net/?retryWrites=true&w=majority')

const db = conn.useDb("NEW")

module.exports = {db}