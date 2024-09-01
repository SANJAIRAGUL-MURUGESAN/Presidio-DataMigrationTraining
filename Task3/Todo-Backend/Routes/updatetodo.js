const express = require('express')
const updatetodo = express.Router()
const {Todo} = require('../Database/schema.js')


updatetodo.put('/',async(req,res)=>{
    try{
        const { todoid,newtodo } = req.body
        const existingtodo = await Todo.find({ _id : todoid })
        if(existingtodo.length != 0){
            const updatedresult = await Todo.updateOne({ _id : todoid}, { $set: { todo: newtodo }});
            return res.status(200).json({
                Success : true,
                Message : "Todo Updated Successfully!"
            })
        }
        return res.status(404).json({
            success : true,
            Message : "No Such Todo Found!"
        })
    }
    catch(err){
        console.log(err)
        res.status(408).json({
            Success : false,
            Message : "There is an Error in Updating the Tood."
        })
    }
})

module.exports = updatetodo