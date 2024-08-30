const express = require('express')
const addtodo = express.Router()
const {todo, Todo} = require('../Database/schema.js')


addtodo.post('/',async(req,res)=>{
    console.log('hi')
    const { todo,boardingpoint} = req.body
    const add = new Todo({
        todo : todo,
        status : "Inline"
    })
    await add.save()
    res.status(200).json({
        success : true,
        message : "Todo Added Successfully"
    })
})

module.exports = addtodo