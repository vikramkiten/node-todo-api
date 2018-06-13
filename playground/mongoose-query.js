const {ObjectID}=require('mongodb');

const mongoose=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

let id='5b1fc307c62182266ca0fd48';

if(!ObjectID.isValid(id))
{
    console.log("Id not valid");
}
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo by Id:",todo);
}).catch((e)=>{
    console.log(e);
})