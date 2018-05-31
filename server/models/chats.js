const mongoose =require ('mongoose');

const schema = mongoose.Schema;

const chatSchema = new schema({
    from:String,
    to:String,
    message:String,    
    time: {type: Date, default: Date.now},
    
});

module.exports = mongoose.model('chats',chatSchema);