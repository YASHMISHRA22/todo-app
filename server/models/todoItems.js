//import mongoose
const mongoose=require('mongoose');

//create Schema
const TodoItemSchema=new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})
//export Schema
module.exports=mongoose.model('todo',TodoItemSchema);