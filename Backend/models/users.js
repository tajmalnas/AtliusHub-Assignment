const { Timestamp } = require('bson');
const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
    {
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    }
},
{
    Timestamp:true
}
);

module.exports = mongoose.model('User',userSchema);