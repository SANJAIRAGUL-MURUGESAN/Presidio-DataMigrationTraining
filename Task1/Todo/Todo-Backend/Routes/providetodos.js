const express = require('express')
const providetodos = express.Router()
const {Todo} = require('../Database/schema.js')

providetodos.get('/',async(req,res)=>{    
    try{
        const result = await Todo.find({})
        res.status(200).json({ 
            Success : true,
            count : result.length,
            Data : result,
        })
    }catch(err){
        res.status(200).json({
            Success : false,
            Data : 'Something Went Wrong',
        })
    }

})

module.exports = providetodos