const express = require('express')
const deletetodo = express.Router()
const {todo, Todo} = require('../Database/schema.js')


deletetodo.delete('/',async(req,res)=>{
    try{
        const { todoid } = req.body
        const deletedtodo = await Todo.deleteOne({_id:todoid})
        if(deletedtodo.length != 0){
            return res.status(200).json({
                success : true,
                message : "Todo Deleted Successfully!"
            })
        }else{
            return res.status(404).json({
                success : true,
                message : "No Such Todo Found!"
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(408).json({
            Success : false,
            Message : "There is an Error in Deleting Todo!"
        })
    }
})

module.exports = deletetodo