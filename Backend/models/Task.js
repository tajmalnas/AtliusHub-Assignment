const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema(
    {
    email:{
        type:String,
        require:true,
    },
    taskName:{
        type:String,
        require:true
    },
    taskStatus:{
        type:String,
        require:true
    }
}
);

module.exports = mongoose.model('Task',taskSchema);