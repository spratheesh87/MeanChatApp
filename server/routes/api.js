const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const db="mongodb://localhost:27017/chatdb"

const User = require('../models/user');
const Chats = require('../models/chats');
mongoose.primise = global.primise;
mongoose.connect(db,function (err){
if(err){
   console.log("error connecting db")
}

});
router.post('/signin',function(req,res){
    console.log("inside signin"+req.body.userName);
    User.findOneAndUpdate({userName:req.body.userName},{$set:{signedIn:true}})
    .exec(function (err,user){
        if(err){
            res.send(err);
        } else {     
            if(user.length){
                res.json({"message":"valid user"})
            }else {
                res.send({"message":"Invalid user"})
            }
        }
    });
});


router.post('/signup',function(req,res){
    console.log("inside signup"+req.body.userName);
    let count= 0;
    User.find({userName:req.body.userName})
    .exec(function (err,user){
        if(err){
            res.send(err);
        } else {  
            console.log("inside else")  ;   
             count=user.length;
             if(!user.length){
                const newUser = new User({
                    userName:req.body.userName,
                    password:req.body.password,
                    email: req.body.email
                })
                newUser.save(function (err,user){
                if(err){
                    res.json({message:error});
                }else {
                    res.json(user);
                }
                });  
            } else {
                res.json({"message":"user already exist"});
            }  
        }
    });    
});


router.get('/listUsers/:userName',function(req,res) {
    console.log("inside listUsers"+req.params.userName);
    User.find({userName:{$ne:req.params.userName}})
    .exec(function(err,user){
        if(err){
            console.log("inside error"+err);
            res.json(err)
        }else {
            console.log("inside user"+user);
            res.json(user)
        }
    })
})

router.get('/listChatDetails/:currentuser/:selecteduser',function(req,res) {  
    console.log(req.params.currentuser+req.params.selecteduser)  

    Chats.find({
        $or: [
            { $and: [{from: req.params.currentuser}, {to: req.params.selecteduser}] },
            { $and: [{from: req.params.selecteduser}, {to: req.params.currentuser}] }
        ]})
    //Chats.find({$or:([{from:"pratheesh",to:"test"},{from:"test",to:"pratheesh"}])
    .exec(function(err,messageContent){
        if(err){
            console.log("inside error"+err);
            res.json(err)
        }else {
            console.log("inside chat list"+messageContent);
            res.json(messageContent)
        }
    })
})




module.exports= router;
