const express = require('express')
const adduser = express.Router()
const {user, User} = require('../Database/schema.js')


adduser.post('/',async(req,res)=>{
    try{
        const { firstname,lastname,username,password} = req.body
        const add = new User({
            Firstname : firstname,
            Lastname : lastname,
            Username : username,
            Password : password
        })
        await add.save()
        res.status(200).json({
            success : true,
            message : "User Added Successfully!"
        })
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            Success : false,
            Message : "There is an Error in User Registration!"
        })
    }
})

module.exports = adduser