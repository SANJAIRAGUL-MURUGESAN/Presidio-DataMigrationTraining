const express = require('express')
const userloginer = express.Router()
const {user, User} = require('../Database/schema.js')


userloginer.post('/',async(req,res)=>{
    try{
        const {username,password} = req.body
        const useravailable = await User.find({Username:username})
        if(useravailable.length != 0){
            if(useravailable[0].Password == password){
                return res.status(200).json({
                    success : true,
                    message : "User Login Successfully"
                })
            }else{
                return res.status(200).json({
                    success : false,
                    message : "Invalid Username or Password"
                })
            }
        }else{
            res.status(200).json({
                success : false,
                message : "No Such User Found!"
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(408).json({
            Success : false,
            Message : "There is an Error in User Login!"
        })
    }
})

module.exports = userloginer