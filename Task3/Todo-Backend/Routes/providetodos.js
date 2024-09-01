const express = require('express')
const providetodos = express.Router()
const {Todo} = require('../Database/schema.js')

providetodos.get('/',async(req,res)=>{    
    try{
        const result = await Todo.find({})
        if(result.length !=0){
            res.status(200).json({ 
                Success : true,
                count : result.length,
                Data : result,
            })
        }else{
            res.status(204).json({ 
                Success : true,
                Message : "No Todos Found!",
            })
        }
    }catch(err){
        res.status(408).json({
            Success : false,
            Data : 'Something Went Wrong!',
        })
    }

})

module.exports = providetodos