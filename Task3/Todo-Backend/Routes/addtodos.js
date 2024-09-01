const express = require('express')
const addtodo = express.Router()
const {todo, Todo} = require('../Database/schema.js')


addtodo.post('/',async(req,res)=>{
    try{
        const { todo} = req.body
        const add = new Todo({
            todo : todo,
            status : "Inline"
        })
        await add.save()
        res.status(200).json({
            success : true,
            message : "Todo Added Successfully!"
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            Success : false,
            Message : "There is an Error in Adding Todo!"
        })
    }
})

module.exports = addtodo