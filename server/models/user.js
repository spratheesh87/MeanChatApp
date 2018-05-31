const mongoose =require ('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    userName:String,
    password:String,
    email:String,
    signedIn:Boolean
});

module.exports = mongoose.model('user',userSchema);